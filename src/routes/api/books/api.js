const express = require('express');

const router = express.Router();

const Books = require('../../../models/books');

//Routes
router.get('/', (req, res) => {
    Books.find({})
       .then((data) => {
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

router.get('/id/:id', (req, res) => {
    Books.findOne({id : req.params.id},function(error, book){
        res.json(book);
    });
});

router.post('/save', (req, res) => {
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
    
    const result = Books.slice(startIndex,endIndex)
    res.json(result)
})

/*/Sorting
router.get('/sort+1', (req, res) => {
    Books.sort(  price=1 )
        .then((data) => {
            res.json(data);
            console.log(data);
        })
        .catch((error) => {
            console.log('error:', daerrorta);
        });
});*/
       


module.exports = router;