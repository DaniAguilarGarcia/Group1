require('dotenv').config(); // load .env

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('./database');

// Authentication
require('./auth')(app);

// Request Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register Routes
require('./routes')(app);

// Listen
const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.export = app;


