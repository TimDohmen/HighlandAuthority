import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  nickname: { type: String, default: "N/A" },
  location: { type: String },
  class: { type: String },
  bio: { type: String },
  picture: { type: String, default: '//robohash.org/d$?set=set4' },
  phone: { type: Number },
}, { timestamps: true })


export default class AthleteService {
  get repository() {
    return mongoose.model('Athlete', _schema)
  }
}