import React, { useState, useEffect, useRef } from "react";
import StarRatingComponent from "react-star-rating-component";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

const Ratings = (props) => {
  const [nickname, setNickname] = useState("Current User");
  const [rating, setRating] = useState(5);
  const [userTitle, setUserTitle] = useState("");
  const [userComment, setUserComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hideUser, setHideUser] = useState(false);
  const [book, setBook] = useState(undefined);
  let {id} = useParams();
  let history = useHistory();

  async function getReviews(){
    let reviews = await Axios.get(`/api/reviews/${id}`);
    setComments(reviews.data);
  }

  useEffect(() => {
    async function getBookDetails(){
      let details = await Axios.get(`/books/id/${id}`);
      setBook(details.data);
    }
    getBookDetails();
    getReviews();
  }, [id]);

  useEffect(() =>{
    if(props.user?.nickname){
      setNickname(props.user.nickname);
    }
  }, [props.user]);

  const submitReview = async (e) => {
    e.preventDefault();
    if (props.logged_in) {
      await Axios.post('/api/reviews/create', {
        title: userTitle,
        rating,
        comment: userComment,
        id,
        nickname: hideUser ? "Anonymous" : nickname
      })
      getReviews();
    } else {
      setShowModal(true);
    }
    resetForm();
  };

  const resetForm = () => {
    setUserTitle("");
    setUserComment("");
    setRating(5);
  };

  return (
    <>
      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col">
          <h2>Reviews for: {book?.title}</h2>
          <h3>Average rating:</h3>
          <StarRatingComponent
            name="average_rating"
            starCount={5}
            value={book?.average_rating}
          />
          <div className="col-10 mx-auto text-center col-md-6 my-3">
            <img src={book?.img} className="img-fluid" alt="" />
          </div>
          <ul class="list-group">
            {comments.map((obj) => (
              <li class="list-group-item" key={obj.id}>
                <h4>{obj.title}</h4>
                <h6>Review by {obj.nickname}</h6>
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
            onStarClick={(val) => setRating(val)}
          />
          <form onSubmit={submitReview}>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                value={userTitle}
                onChange={(e) => setUserTitle(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Comment</label>
              <textarea
                className="form-control"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
              ></textarea>
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                value={hideUser}
                onChange={() => setHideUser((prev) => !prev)}
              />
              <label class="form-check-label">Hide Username</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <div
          class="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Comment Submission Error</h5>
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>You need to be logged in to submit a comment</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => history.push("/login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ratings;
