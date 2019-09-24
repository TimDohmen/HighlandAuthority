import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  name: { type: String },
  location: { type: String },
  date: { type: Number },
  hostingOrg: { type: String, default: "Northern Rockies" },
  userId: { type: ObjectId, ref: "User", required: true }
}, { timestamps: true })


export default class GameService {
  get repository() {
    return mongoose.model('Game', _schema)
  }
}