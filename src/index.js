require('dotenv').config(); // load .env

const express = require('express');
const app = express();
const DB = require('./database');

app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.export = app;


