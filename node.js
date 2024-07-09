const mongoose = require("mongoose")
const { type } = require("os")
const userData = new mongoose.Schema({
  name:{
    type:String
  },
  Number:{
    type:Number
  }
})
const User = mongoose.model("User",userData)
module.exports = userData