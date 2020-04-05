const router = require('express').Router();
let book = require('../src/models/books');

router.route('/').get((req, res) => {
  book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const isbn = req.body.isbn;
  const title = req.body.title;
  const publication_date = req.body.publication_date;
  const edition = req.body.edition;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const author_name = req.body.author_name;
  const publisher = req.body.publisher;
  const genre = req.body.genre;
  const book_description = req.body.book_description;
  
  /*
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  */

  const newBook = new book({
    isbn,
    title,
    publication_date,
    edition,
    quantity,
    price, 
    author_name, 
    publisher,
    genre,
    book_description,
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
      book.isbn = req.body.isbn;
      boo.title = req.body.title;
      book.publication_date = req.body.publication_date;
      book.edition = req.body.edition;
      book.quantity = req.body.quantity;
      book.price = req.body.price;
      book.author_name = req.body.author_name;
      book.publisher = req.body.publisher;
      book.genre = req.body.genre;
      book.book_description = req.body.book_description;


      /*
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);
      */

      book.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;