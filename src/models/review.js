const mongoose = require('mongoose');

/**
 * @typedef {Object} Review
 * @property {string} title
 * @property {integer} rating
 * @property {string} comment
 * @property {string} id
 * @property {string} nickname
 */

const schema = mongoose.Schema({
    title: String,
    rating: Number,
    comment: String,
    id: String,
    nickname: String,
});

// ObjectId = require('mongodb').ObjectID, review = {
//     addBookReview: (data, callBack) => {
//         let bookID = new ObjectId(data._id);
//         const collection = mongodbConnection.db().collection("Books");
//         collection.updateOne({ _id: bookID }, { $addToSet: { review: data.review } }, (addError, addResult) => {
//             if (!addError) {
//                 callBack(200, addResult);
//             } else {
//                 console.log(addError);
//                 callBack(500, addError);
//             }
//         });

//     },
//     updateBookAverageRating: (id, callBack) => {
//         const purchaseCollection = mongodbConnection.db().collection("Purchase");
//         const avgRating = purchaseCollection.find({ _id: new ObjectId(id) }).toArray((err, result) => {
//             if (!err) {
//                 const ratingSum = 0;
//                 result.forEach((rating) => {
//                     ratingSum += rating;
//                 });
//                 const avgRating = ratingSum / result.length;
//                 const bookCollection = mongodbConnection.db().collection("Books");
//                 bookCollection.updateOne({ _id: new ObjectId(id) }, { $set: { "average_rating": avgRating } }, function (err, result) {
//                     !err ? callBack(200, result) : callBack(500, err);
//                 });
//             }
//             else {
//                 console.log(err);
//                 callBack(500, err);
//             }
//         });
//     },
//     get updateBookAverageRating() {
//         return this._updateBookAverageRating;
//     },
//     set updateBookAverageRating(value) {
//         this._updateBookAverageRating = value;
//     },
// };

const model = new mongoose.model('Review', schema);

module.exports = model;