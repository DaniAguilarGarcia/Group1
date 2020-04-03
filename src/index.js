require('dotenv').config(); // load .env

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const DB = require('./database');
const cors = require('cors');
const books = require('./services/books');

app.use(cors());

// Authentication
require('./auth')(app);

// Request Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register Routes
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
        shipping_addresses: [{
          street: '1234 test street',
          city: 'test town',
          state: 'fl',
          postal: '33012',
          country: 'usa',
        }],
        payment_methods: [],
      });

      const Method = require('./models/payment_method');
      
      const method = new Method({
        alias: 'Test Card',
        payer_name: 'Test Cardholder',
        pan: '4242424242424242',
        exp: '01/2024',
        user_id: user._id,
      });
      method.save();

      user.payment_methods.push(method);
      user.save();
    }
  })();
}

/*pagination
app.get('/books',paginatedResults(books), (req,res) => {
    res.json(res.paginatedResults)
})

function paginatedResults(model){
    return async(req, res, next) => {
    
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if(endIndex < model.length){
    results.next = {
        page: page + 1,
        limit: limit
    }
    }
    if(startIndex > 0){
    results.previous = {
        page: page - 1,
        limit: limit
    }
}
try{
    results.results = model.find().limit(limit).skip(startIndex)
    res.paginatedResults = results
    next()
} catch (e) {
    res.status(500).json( message: e.message })
    }
   }
}*/

module.exports = app.listen(port, () => console.log(`App listening on port ${port}!`));


