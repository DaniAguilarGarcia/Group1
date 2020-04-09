const Books = require('../../../models/books');

module.exports = async (req, res) => {
  const books = await Books.find({});

  return res.status(200)
    .send(books);
}