import AthleteService from '../services/AthleteService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import UserService from '../services/UserService'

let _as = new AthleteService().repository
let _us = new UserService().repository

export default class AthleteController {
  constructor() {
    this.router = express.Router()
      .use('', this.myDebug)
      .get('', this.getAll)
      .get('/find', this.findAthleteByQuery)
      // .get('/:id', this.getById)
      .get('/:userId', this.getAthleteByUserId)
      .use(Authorize.authenticated)
      .post('', this.create)
      .put('/:id', this.edit)
      // .delete('/id', this.delete)
      .use(this.defaultRoute)


  }
  myDebug(req, res, next) {
    console.log('URL:', req.originalUrl, 'Type:', req.method, 'User:', req.session.uid)
    next()
  }
  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let data = await _as.find({}).populate('userId', 'name')
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }


  async findAthleteByQuery(req, res, next) {
    try {
      let query = new RegExp(req.query.name, "i")
      let users = await _us.find({ name: { '$regex': query } }).select('name')
      // Regex Allows search to find partial names and ignores case sensitive(https://stackoverflow.com/questions/7101703/how-do-i-make-case-insensitive-queries-on-mongodb)
      if (!users) { throw new Error("No profile found") }
      let photos = users.map(async user => {
        return await _as.findOne({ userId: user.id }).select('picture')
      });
      let result = await Promise.all(photos)
      console.log(result, photos) //Black Magic
      let payload = { users, result }
      res.send(payload) // Need to send both users and results

    } catch (error) {
      next(error)
    }
  }

  // async findUserByQuery(req, res, next) {
  //   try {
  //     let user = await _userService.findOne(req.query).select('name email work phoneNumber location image netWorth')
  //     if (!user) { throw new Error("No user found") }
  //     res.send(user)
  //   } catch (error) { next(error) }
  // }

  // async getById(req, res, next) {
  //   try {
  //     let data = await _as.findOne({ _id: req.params.id }).populate('userId', 'name')
  //     return res.send(data)
  //   } catch (error) {
  //    next(error)
  //   }
  // }
  async getAthleteByUserId(req, res, next) {
    try {
      let data = await _as.findOne({ userId: req.params.id }).populate('userId', 'picture')
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await _as.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      delete req.body.userId
      let data = await _as.findOneAndUpdate({ _id: req.params.id, userId: req.session.uid }, req.body, { new: true })
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  // async delete(req, res, next) {
  //   try {
  //     let data = await _as.findOneAndRemove({ _id: req.params.id, userId: req.session.uid })
  //     if (!data) {
  //       throw new Error("invalid id, you didn't say the magic word")
  //     } res.send("deleted")
  //   } catch (error) { next(error) }

  // }
}