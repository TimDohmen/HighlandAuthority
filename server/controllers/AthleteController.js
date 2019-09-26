import AthleteService from '../services/AthleteService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
// import UserService from '../services/UserService'

let _as = new AthleteService().repository
// let _us = new UserService().repository

export default class AthleteController {
  constructor() {
    this.router = express.Router()
      .use('', this.myDebug)
      .get('', this.getAll)
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
      let data = await _as.findOne({ userId: req.params.userId }).populate('userId', 'name')
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