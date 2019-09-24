import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  location: { type: String },
  date: { type: Number },
}, { timestamps: true })


export default mongoose.model('Game', _schema)