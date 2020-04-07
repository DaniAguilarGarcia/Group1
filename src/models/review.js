import mongoose, { model as _model } from 'mongoose';

/**
 * @typedef {Object} Review
 * @property {string} title
 * @property {integer} rating
 * @property {string} comment
 * @property {integer} book_id
 * @property {string} customer_id
 */

const schema = new.mongoose.Schema({
    _id: ObjectId,
    title: String,
    rating: int,
    comment: String,
    book_id: int,
    customer_id: int,
});

ObjectId = require('mongodb').ObjectID, review = {
    addBookReview: (data, callBack) => {
        let bookID = new ObjectId(data._id);
        const collection = mongodbConnection.db().collection("Books");
        collection.updateOne({ _id: bookID }, { $addToSet: { review: data.review } }, (addError, addResult) => {
            if (!addError) {
                callBack(200, addResult);
            } else {
                console.log(addError);
                callBack(500, addError);
            }
        });

    },
    updateBookAverageRating: (id, callBack) => {
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
                        !err ? callBack(200, result) : callBack(500, err);
                    });
            }
            else {
                console.log(err);
                callBack(500, err);
            }
        });
    },
};

const model = new mongoose.model('Review', schema);

module.exports = review;