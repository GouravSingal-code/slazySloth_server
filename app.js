const express = require('express');
const mongoose = require("./dbConnection");
const app = express();
const cors = require("cors");
const routes = require('./routes/users'); // Adjust the path as needed
const bodyParser = require('body-parser');



app.use(cors());

app.use(express.json()); // for application/json
app.use(express.urlencoded());
// Use the body-parser middleware for 'application/x-www-form-urlencoded' data
app.use(bodyParser.urlencoded({ extended: true }));


// Use the router for all routes under /api
app.use('/', routes);

  
module.exports = app;