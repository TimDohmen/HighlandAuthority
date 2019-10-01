
import UserService from "../services/UserService"

let _us = new UserService().repository

export class Authorize {
    static authenticated(req, res, next) {
        if (!req.session.uid) {
            return res.status(401).send({
                error: 'please login to continue'
            })
        }
        next()
    }


    static async adminAuthenticate(req, res, next) {
        try {
            let user = await _us.findOne({ role: "Admin", _id: req.session.uid })
            if (!user) {
                let user = await _us.findOne({ role: "Judge", _id: req.session.uid })
                if (!user) {
                    return res.status(401).send({
                        error: 'Please contact admin or judge'
                    })
                }
            }
            next()
        }
        catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }


}
