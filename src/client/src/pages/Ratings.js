import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Ratings = () => {
  const [customerId, setCustomerId] = useState(parseInt('0001'));
  const [rating, setRating] = useState(5);
  const [userTitle, setUserTitle] = useState("");
  const [userComment, setUserComment] = useState("");
  const [comments, setComments] = useState([
    {
      title: "Great Book!",
      rating: 5,
      comment: "I love this book, it's one of my favorites.",
      customer_id: 12345
    }
  ]);

  const submitReview = e => {
    e.preventDefault();
    setComments(prevState => prevState.concat({rating, title: userTitle, comment: userComment, customer_id: customerId}));
    resetForm();
  };

  const resetForm = () => {
    setUserTitle('');
    setUserComment('');
    setRating(5);
  };

  return (
    <>
    <div className="row" style={{marginBottom: '20px'}}>
      <div className="col">
        <h2>Reviews for: </h2>
        <ul class="list-group">
          {comments.map(obj => (
            <li class="list-group-item">
              <h4>{obj.title}</h4>
              <h6>Review by {obj.customer_id}</h6>
              <StarRatingComponent
              name="rating"
              starCount={5}
              value={obj.rating}
              />
              <p>{obj.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
      
      <div className="row">
        <div className="col">
          <h2>Leave your own comment below!</h2>
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={rating}
            onStarClick={val => setRating(val)}
          />
          <form onSubmit={submitReview}>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                value={userTitle}
                onChange={e => setUserTitle(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Comment</label>
              <textarea
                className="form-control"
                value={userComment}
                onChange={e => setUserComment(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ratings;
