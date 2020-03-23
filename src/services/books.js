
const express = require ('express');
const api = express();
const router = express.Router();

var BooksDB = require('../models/books');

router.route('/').get(function (req, res) {

    BooksDB.find(function (err, books) {
        if(err){
            console.log(err);
        }
        else{
            res.json(books);
        }
    });
});

module.exports = router;
