import expressSession from 'express-session'
import mongoose from "mongoose";
var mongoStore = require("connect-mongo")(expressSession);

var store = new mongoStore({
    mongooseConnection: mongoose.connection
});

store.on("error", function (err) {
    console.log("[SESSION ERROR]", err);
});


export default class Session {
    constructor() {
        this.express = expressSession({
            secret: "you should change this", //CHANGE ME!!!!
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
            },
            store,
            resave: true,
            saveUninitialized: true
        })
    }
}