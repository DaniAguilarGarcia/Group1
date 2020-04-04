require('dotenv').config(); // load .env

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const DB = require('./database');
const cors = require('cors');
const books = require('./routes/api/books/api.js');

app.use(cors());

// Authentication
require('./auth')(app);

// Request Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register Routes
app.use('/books', books);
require('./routes')(app);

// Listen
const port = process.env.PORT;

// Create testing user
if (process.env.NODE_ENV === 'local') {
    const test_username = 'test_user';
    const test_password = 'AbsoluteUnit1134!';
    (async () => {
        const Users = require('./services/users');
        let user = await Users.findByUsername(test_username);
        if (!user) {
            user = await Users.create({
                username: test_username,
                password: test_password,
                email: 'test@example.com',
                name: 'Test User',
                nickname: 'Test User',
                address: {
                    street: '1234 test street',
                    city: 'test town',
                    state: 'fl',
                    postal: '33012',
                    country: 'usa',
                },
            });
        }
    })();
}


module.exports = app.listen(port, () => console.log(`App listening on port ${port}!`));


