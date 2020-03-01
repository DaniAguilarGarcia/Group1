import React from "react";
import ReviewStars from "./Ratings/ReviewStars";

export default function ReviewRow(props) {
    let review = {};
    if (props.review !== undefined) {
        review = props.review;
    }

    return (
        <div>
            <div className="container">
                <div className="mt-5 justify-content-start">
                    <ul>
                        <li className="boxbg">
                            <div>
                                <strong>
                                    <span>{review ? review.title : undefined}</span>
                                </strong>
                                <span>
                                    <strong>
                                        {" by "}
                                        {review.user
                                            ? review.user.first_name + " " + review.user.last_name
                                            : undefined}
                                    </strong>
                                </span>
                                <br />
                                <span>
                                    <ReviewStars avgRating={review.rating} />
                                </span>
                                <div className="mb-1 mt-4 ">
                                    <p>{review ? review.comment : undefined}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}