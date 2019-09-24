import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  location: { type: String },
  class: { type: String },
  bio: { type: String },
  picture: {},
  phone: { type: Number },
}, { timestamps: true })


export default mongoose.model('Athlete', _schema)