import express from 'express'
import UserService from '../services/UserService';
import { Authorize } from '../middleware/authorize'
// import SendEmailController from '../controllers/SendEmailController'
//import nodemailer from 'nodemailer'

let _userService = new UserService().repository
//PUBLIC
export default class AuthController {
    constructor() {
        this.router = express.Router()
            // .use('', this.myDebug)
            // .use('', new SendEmailController().router)
            .post('/register', this.register)
            .post('/login', this.login)
            .post('/reset/', this.SendForgotEmail)
            .use(Authorize.authenticated)
            .get('/authenticate', this.authenticate)
            .get('/adminAuthenticate', this.adminAuthenticate)
            .put('/:id', this.editRole)
            //FIXME Change Password
            .put('/:id/forgot', this.changePassword)
            .delete('/logout', this.logout)
            .use(this.defaultRoute)
    }


    myDebug(req, res, next) {
        console.log('URL:', req.originalUrl, 'Type:', req.method, 'User:', req.session.uid)
        next()
    }

    defaultRoute(req, res, next) {
        next({ status: 404, message: 'No Such Route' })
    }

    async editRole(req, res, next) {
        try {
            let data = await _userService.findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true })
            if (data) {
                return res.send(data)
            }
            throw new Error("invalid role to update")
        } catch (error) {
            next(error)

        }
    }
    //Password Stuff

    async SendForgotEmail(req, res) {
        try {
            req.body.hash = UserService.generateHash(req.body.password)
            let user = _userService.findOne({ email: req.body.query }, function (err, user) {
                if (!user) {
                    req.alert('error', 'No account with that email address exists.'); //FIXME 
                    return res.redirect('/email-forgot');
                }
            })
        } catch (error) {

        }
    }


    async changePassword(req, res, next) {
        //VALIDATE PASSWORD LENGTH
        if (req.body.password.length < 6) {
            return res.status(400).send({
                error: 'Password must be at least 6 characters'
            })
        }
        try {
            req.body.hash = UserService.generateHash(req.body.password)
            let user = await _userService.findOneAndUpdate({ _id: req.session.uid, hash: req.body.hash }) //FIXME 

            //Delete Password
            delete user._doc.hash

            //SET THE SESSION UID (SHORT FOR USERID)
            req.session.uid = user._id
            res.status(201).send(user)

        } catch (error) {
            res.status(400).send(error)
        }
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
    async adminAuthenticate(req, res, next) {
        // try {
        //     let user = await _userService.findOne({ _id: req.session.uid, role: "admin" })
        //     if (!user) {
        //         return res.status(401).send({
        //             error: 'Please contact admin or judge'
        //         })
        //     }
        //     delete user._doc.hash
        //     res.send(user)
        // }
        // catch (err) {
        //     console.error(err)
        //     res.status(500).send(err)
        // }

        try {
            let user = await _userService.findOne({ role: "Admin", _id: req.session.uid })
            if (!user) {
                let user = await _userService.findOne({ role: "Judge", _id: req.session.uid })
                if (!user) {
                    return res.status(401).send({
                        error: 'Please contact a judge to create a game'
                    })
                } else {
                    delete user._doc.hash
                    res.send(user)
                }
            }
            delete user._doc.hash
            res.send(user)
        }
        catch (err) {
            console.error(err)
            res.status(500).send()
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


