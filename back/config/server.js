const mongoose = require("mongoose");

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.BBD, options, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.info("connexion ok");
  }
});

module.exports = mongoose;
