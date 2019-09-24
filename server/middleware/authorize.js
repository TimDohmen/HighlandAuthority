export class Authorize {
    static authenticated(req, res, next) {
        if (!req.session.uid) {
            return res.status(401).send({
                error: 'please login to continue'
            })
        }
        next()
    }
}
