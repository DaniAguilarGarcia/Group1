import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Ratings = () => {
  const [rating, setRating] = useState(3);
  const [userComment, setUserComment] = useState("");

  const submitReview = (e) => {
    e.preventDefault();
    console.log(rating, userComment);
  }

  return (
    <div className="row">
      <div className="col">
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={rating}
          onStarClick={val => setRating(val)}
        />
        <form onSubmit={submitReview}>
          <div className="form-group">
            <label>Comment</label>
            <textarea className="form-control" value={userComment} onChange={(e) => setUserComment(e.target.value)}></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Ratings;
