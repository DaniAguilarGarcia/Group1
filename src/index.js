require('dotenv').config(); // load .env

const express = require('express');
const app = express();
const DB = require('./database');
const cors = require('cors');

const bookService = require('./services/books');

app.use(cors());
app.use('/', bookService);

//app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


