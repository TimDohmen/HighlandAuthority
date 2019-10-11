import mongoose from "mongoose"
import { stringify } from "querystring"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  eventName: { type: String, enum: ["hammer-heavy", "hammer-light", "w4d-heavy", "w4d-light", "braemar", "open-stone"], required: true },
  topAttempt: { type: Number },
  gamesId: { type: ObjectId, ref: "Game", required: true },
  throwingClass: { type: String, enum: ["pro-class", "a-class", "b-class", "c-class", "novice-class", "masters-40", "masters-50", "masters-60", "womens-open", "womens-masters", "womens-pro", "lightweight"] }
}, { timestamps: true })

export default class ScoreService {
  get repository() {
    return mongoose.model('Score', _schema)
  }
}