import AthleteService from '../services/AthleteService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import UserService from '../services/UserService'

let _as = new AthleteService().repository
let _us = new UserService().repository

export default class AthleteController {
  constructor() {
    this.router = express.Router()
      // .use('', this.myDebug)
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
      //NOTE might be 'name' 'role'
      let data = await _as.find({}).populate('userId', 'name role')
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async findAthleteByQuery(req, res, next) {
    try {
      let query = new RegExp(req.query.name, "i")
      let users = await _us.find({ name: { '$regex': query } }).select('name role')
      // Regex Allows search to find partial names and ignores case sensitive(https://stackoverflow.com/questions/7101703/how-do-i-make-case-insensitive-queries-on-mongodb)
      if (!users) { throw new Error("No profile found") }
      //REVIEW Itterate over the users, and create a request for each user to find their athlete photo
      let photos = users.map(async user => {
        return await _as.findOne({ userId: user.id }).select('picture userId')
      });
      //REVIEW The previous note created the request, this fires the requests
      let result = await Promise.all(photos)

      //NOTE Itterates over users and connects them with their photo
      let payload = users.map(u => {
        let photo = result.find(p => {
          if (p) {
            return p.userId.equals(u._id)
          }
          return false;
        })
        //REVIEW Payload becomes an array of these objects
        let data = { _id: u._id, name: u.name, photo, role: u.role }
        if (data.photo) {
          data.photo = data.photo.picture
        }
        return data
      })
      //NOTE Filter out any non-athlete users becasue they don't have a photo
      payload = payload.filter(u => u.photo)
      res.send(payload) // Need to send both users and results
    } catch (error) {
      next(error)
    }
  }


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
      let data = await _as.findOne({ userId: req.params.userId }).populate('userId', 'name role')
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