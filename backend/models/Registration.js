const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  trainer: { type: String, required: true },
  protein: { type: String, required: true },
});

module.exports = mongoose.model("Registration", RegistrationSchema);
