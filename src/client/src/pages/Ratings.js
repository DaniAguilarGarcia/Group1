import React, { Component, useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Ratings = () => {
  const [rating, setRating] = useState(3);

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
        <form>
          <div className="form-group">
            <label>Comment</label>
            <textarea className="form-control"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Ratings;
