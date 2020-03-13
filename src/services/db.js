const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/url", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
