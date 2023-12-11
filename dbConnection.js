const mongoose = require('mongoose');
const uri = require('./config/dbCredentials');

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});

module.exports = mongoose;
module.exports = db;