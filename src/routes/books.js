const router = require('express').Router();
let Book = require('../src/models/books');

router.route('/').get((req, res) => {
  book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const publication_date = req.body.publication_date;
  const author = req.body.author;
  const publisher = req.body.publisher;
  const genre = req.body.genre;
  const img = req.body.img;
  const info = req.body.info;
  const quantity = Number(req.body.quantity);
  const average_rating = Number(req.body.average_rating);
  const price = Number(req.body.price);
  const inCart = Boolean(req.body.inCart);
  const inWishList = Boolean(req.body.inWishList);
  const count = Number(req.body.count);
  const total = Number(req.body.total);
  
  const newBook = new book({
    id,
    title,
    publication_date,
    author,
    publisher,
    genre,
    img,
    info,
    quantity,
    average_rating,
    price,
    inCart,
    inWishList,
    count,
    total,
  });

  newBook.save()
  .then(() => res.json('Book added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  book.findById(req.params.id)
    .then(book => {
        id = req.body.id;
        title = req.body.title;
        publication_date = req.body.publication_date;
        author = req.body.author;
        publisher = req.body.publisher;
        genre = req.body.genre;
        img = req.body.img;
        info = req.body.info;
        quantity = req.body.quantity;
        average_rating = req.body.average_rating;
        price = req.body.price;
        inCart = req.body.inCart;
        inWishList = req.body.inWishList;
        count = req.body.count;
        total = req.body.total;

      book.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


