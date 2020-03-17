const mongoose = require('mongoose');

/**
 * @typedef {Object} Review
 * @property {string} title
 * @property {integer} rating
 * @property {string} comment
 * @property {integer} book_id
 * @property {string} customer_id
 * @property {string} password hashed
 * @property {string} nickname  may be deleted
 */

const schema = new.mongoose.Schema({
    _id: ObjectId,
    title: String,
    rating: int,
    comment: String,
    book_id: int,
    customer_id: int,
});
/* Will need modification

ObjectId = require('mongodb').ObjectID, review = {
    addBookReview: (data, cb) => {
        let bookID = new ObjectId(data._id);
        const collection = mongodbConnection.db().collection("Books");
        collection.updateOne({ _id: bookID }, { $addToSet: { review: data.review } }, (addError, addResult) => {
            if (!addError) {
                cb(200, addResult);
            } else {
                console.log(addError);
                cb(500, addError);
            }
        });

    },
    updateBookAverageRating: (id, cb) => {
        const purchaseCollection = mongodbConnection.db().collection("Purchase");
        const avgRating = purchaseCollection.find({ _id: new ObjectId(id) }).toArray((err, result) => {
            if (!err) {
                const ratingSum = 0;

                result.forEach((rating) => {
                    ratingSum += rating;
                });

                const avgRating = ratingSum / result.length;

                const bookCollection = mongodbConnection.db().collection("Books");
                bookCollection.updateOne({ _id: new ObjectId(id) },
                    { $set: { "avg_rating": avgRating } }, function (err, result) {
                        !err ? cb(200, result) : cb(500, err);
                    });
            }
            else {
                console.log(err);
                cb(500, err);
            }
        });
    },
};

const model = new mongoose.model('Review', schema);
*/
module.exports = schema;