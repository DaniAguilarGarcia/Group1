const Books = require('../../../models/books');

module.exports = async (req, res) => {
  const books = await Books.findById(req.params.bookId);

  return res.status(200)
    .send(books);
}