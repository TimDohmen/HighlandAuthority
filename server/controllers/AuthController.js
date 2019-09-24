import express from 'express'
import UserService from '../services/UserService';
import { Authorize } from '../middleware/authorize'

let _userService = new UserService().repository
//PUBLIC
export default class AuthController {
    constructor() {
        this.router = express.Router()
            .post('/register', this.register)
            .post('/login', this.login)
            .use(Authorize.authenticated)
            .get('/authenticate', this.authenticate)
            .delete('/logout', this.logout)
            .use(this.defaultRoute)
    }

    defaultRoute(req, res, next) {
        next({ status: 404, message: 'No Such Route' })
    }
    async register(req, res, next) {
        //VALIDATE PASSWORD LENGTH
        if (req.body.password.length < 6) {
            return res.status(400).send({
                error: 'Password must be at least 6 characters'
            })
        }
        try {
            //CHANGE THE PASSWORD TO A HASHED PASSWORD
            req.body.hash = UserService.generateHash(req.body.password)

            //CREATE THE USER
            let user = await _userService.create(req.body)
            //REMOVE THE PASSWORD BEFORE RETURNING
            delete user._doc.hash
            //SET THE SESSION UID (SHORT FOR USERID)
            req.session.uid = user._id
            res.status(201).send(user)
        }
        catch (err) {
            res.status(400).send(err)
        }
    }

    async login(req, res, next) {
        try {
            let user = await _userService.findOne({ email: req.body.email })
            if (!user) {
                return res.status(400).send("Invalid Username Or Password")
            }
            //CHECK THE PASSWORD
            let valid = await user.validatePassword(req.body.password)
            if (!valid) {
                return res.status(400).send("Invalid Username Or Password")
            }
            //ALWAYS REMOVE THE PASSWORD FROM THE USER OBJECT
            delete user._doc.hash
            req.session.uid = user._id
            res.send(user)
        }
        catch (err) {
            res.status(400).send("Invalid Username Or Password")
        }
    }

    async authenticate(req, res, next) {
        try {
            let user = await _userService.findOne({ _id: req.session.uid })
            if (!user) {
                return res.status(401).send({
                    error: 'Please login to continue'
                })
            }
            delete user._doc.hash
            res.send(user)
        }
        catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    }

    async logout(req, res, next) {
        try {
            req.session.destroy(err => {
                if (err) {
                    return res.send(err)
                }
                return res.send({
                    message: 'Logout Successful'
                })
            })
        } catch (error) { next(error) }
    }
}


