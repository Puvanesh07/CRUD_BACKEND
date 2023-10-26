const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
});

const UserModel = mongoose.model("users", userDetailsSchema);

module.exports = UserModel;
