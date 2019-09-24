//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})


export default class DbContext {
  static async connect() {
    try {
      let status = await mongoose.connect(process.env.CONNECTION_STRING) //TODO Make sure you set this in .env
      console.log("CONNECTED")
      return status
    } catch (e) {
      console.error(e)
    }
  }
}