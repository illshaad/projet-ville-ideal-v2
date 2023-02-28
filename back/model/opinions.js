const mongoose = require("mongoose");

const opinionSchema = mongoose.Schema({
  nameUser: String,
  opinion: Number,
});

const dataModelUser = mongoose.model("opinion", opinionSchema);

module.exports = dataModelUser;
