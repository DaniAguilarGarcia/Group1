const express = require ('express');
const api = express();
const router = express.Router();

var Books = require('../models/books_fake');
var BooksDB = require('../models/books');

router.route('/').get(function (req, res) {
    // var book = new BooksDB;
    // var booksList = [];
    // var n;
    // for (n in Books){
        // var book = new BooksDB(Books [n]);
        // book.save()
        // .then(book => {})
        // .catch(err => {
        //     res.status(400).send("not connected");
        // });
    //     booksList.push(Books[n]);
    // }
    // res.json(booksList);
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
