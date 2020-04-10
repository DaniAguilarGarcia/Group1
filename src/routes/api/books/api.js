const express = require('express');

const router = express.Router();

const Books = require('../../../models/books');


//Routes
router.get('/', (req, res) => {

    Books.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error:', daerrorta);
        });
});

router.get('/:bookname', (req, res) => {

    Books.find({title : req.params.bookname},function(error, book){
        res.json(book);
    });
});

router.post('/save', (req, res) => {
    console.log('title:', req.title);
    const data = req.title;

    const newBook = new Books(req.body); 

    newBook.save((error) => {
        if(error){
            res.status(500).json({msg: 'Sorry, internal server error'});
        }else{
            res.json({
                msg: 'we received your data!'
            });
        }
    });
    
});


module.exports = router;