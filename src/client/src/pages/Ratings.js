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
  const [book, setBook] = useState(undefined);
  const [name, setName] = useState("John Doe");
  const [selectedOption, setSelectedOption] = useState("NAME");
  const [purchased, setPurchased] = useState(false);
  let { id } = useParams();
  let history = useHistory();

  async function getReviews() {
    try {
      let reviews = await Axios.get(`/api/reviews/${id}`);
      setComments(reviews.data);
    } catch (e) {
      setShowModal(true);
    }
  }

  useEffect(() => {
    if (id === "978-6282077464" || id === '978-930996540-9') {
      setPurchased(true);
    }
    async function getBookDetails() {
      let details = await Axios.get(`/books/id/${id}`);
      setBook(details.data);
    }
    getBookDetails();
    getReviews();
  }, [id]);

  useEffect(() => {
    if (props.user?.nickname) {
      setNickname(props.user.nickname);
    }
    if (props.user?.name) {
      setName(props.user.name);
    }
  }, [props.user]);

  const submitReview = async (e) => {
    e.preventDefault();
    let show;
    switch (selectedOption) {
      case "NAME":
        show = name;
        break;
      case "NICKNAME":
        show = nickname;
        break;
      default:
        show = "Anonymous";
    }
    if (props.logged_in) {
      await Axios.post("/api/reviews/create", {
        title: userTitle,
        rating,
        comment: userComment,
        id,
        nickname: show,
      });
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
          <h2>
            Reviews for: {book?.title}{" "}
            {purchased && <span class="badge badge-info">Purchased</span>}
          </h2>
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
              <li class="list-group-item" key={obj._id}>
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

      {purchased && (
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
              <div class="form-group">
                <p>Which should we show</p>
                <label style={{ margin: "0.5rem" }}>
                  <input
                    type="radio"
                    value="NAME"
                    checked={selectedOption === "NAME"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Name
                </label>
                <label style={{ margin: "0.5rem" }}>
                  <input
                    type="radio"
                    value="NICKNAME"
                    checked={selectedOption === "NICKNAME"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Nickname
                </label>
                <label style={{ margin: "0.5rem" }}>
                  <input
                    type="radio"
                    value="ANONYMOUS"
                    checked={selectedOption === "ANONYMOUS"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  Anonymous
                </label>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

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
