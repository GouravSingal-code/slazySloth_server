const express = require('express');
const app = express();
const cors = require("cors");
const userRoutes = require('./routes/users'); // Adjust the path as needed
const blogRoutes = require('./routes/blog');
const problemRoutes = require('./routes/problem');
const solutionRoutes = require('./routes/solution');
const forumRoutes = require('./routes/forum')
const bodyParser = require('body-parser');
const multer = require("multer");
const {join} = require("path");
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


// Use the router for all routes under /api
app.use('/user', userRoutes);
app.use('/blog', blogRoutes);
app.use('/problem', problemRoutes);
app.use('/solution', solutionRoutes);
app.use('/forum', forumRoutes);

module.exports = app;