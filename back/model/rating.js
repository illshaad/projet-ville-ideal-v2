const mongoose = require("mongoose");

const ratingsSchema = mongoose.Schema({
  nameUser: String,
  date: Date,
  nameCity: String,
  nameDepartement: String,
  trade: String,
  culture: String,
  education: String,
  environement: String,
  quality: String,
  health: String,
  security: String,
  sportAndLeasur: String,
  qualityOfLife: String,
  transports: String,
  remarkPositive: String,
  remarkNegative: String,
  totalRating: Number,
});

const dataModelRating = mongoose.model("ratings", ratingsSchema);

module.exports = dataModelRating;
