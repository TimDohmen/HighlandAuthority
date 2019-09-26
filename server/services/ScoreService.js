import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// DONT GO FARTHER BACK

let _schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  eventName: { type: String, enum: ["hammer-heavy", "hammer-light", "w4d-heavy", "w4d-light", "braemar", "open-stone"], required: true },
  topAttempt: { type: Number },
  gamesId: { type: ObjectId, ref: "Game", required: true }
}, { timestamps: true })



export default class ScoreService {
  get repository() {
    return mongoose.model('Score', _schema)
  }
}