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

//Paginate
router.get('/books', (req, res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const startIndex = (page -1) * limit
    const endIndex = page * limit
    
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