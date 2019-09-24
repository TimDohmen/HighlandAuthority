import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


let _schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  eventName: { type: String, enum: ["Hammer Heavy", "Hammer Light", "W4D Heavy", "W4D Light", "Braemar", "Open Stone"], required: true },
  topAttempt: { type: Number },
  gamesId: { type: ObjectId, ref: "Game", required: true }
}, { timestamps: true })



export default class ScoreService {
  get repository() {
    return mongoose.model('Score', _schema)
  }
}