const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  pseudo: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

const dataModelUser = mongoose.model("user", userSchema);

module.exports = dataModelUser;
