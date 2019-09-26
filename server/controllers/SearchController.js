import UserService from '../services/UserService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

let _us = new UserService().repository

export default class SearchController {
  constructor() {
    this.router = express.Router()
      .get("/find", this.findUserByQuery)
      .use(Authorize.authenticated)
  }
  async findUserByQuery(req, res, next) {
    try {
      let user = await _us.find(req.query).select('name')
      res.send(user)
    } catch (error) {
      next(error)
    }
  }
}

