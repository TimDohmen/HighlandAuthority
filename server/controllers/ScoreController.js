import ScoreService from '../services/ScoreService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

let _scoreService = new ScoreService().repository

//PUBLIC
export default class ScoreController {
  // DONT GO FARTHER BACK

  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id/find', this.getByQuery)
      // .get('/:id', this.getByQuery)
      .get('/:id/findAll', this.getAllByQuery)
      .use(Authorize.authenticated)

      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let data = await _scoreService.find({ userId: req.session.uid }).sort('-topAttempt')
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getByQuery(req, res, next) {
    try {
      let data = await _scoreService.findOne({ userId: req.params.id, eventName: req.query.eventName }).sort('-topAttempt')
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getAllByQuery(req, res, next) {
    try {
      let data = await _scoreService.find({ userId: req.params.id, eventName: req.query.eventName }).populate('gamesId', 'name date')
      return res.send(data)
    } catch (error) { next(error) }
  }


  async create(req, res, next) {
    try {
      req.body.userId = req.session.uid
      let data = await _scoreService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _scoreService.findOneAndUpdate({ _id: req.params.id, userId: req.session.uid }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _scoreService.findOneAndRemove({ _id: req.params.id, userId: req.session.uid })
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


