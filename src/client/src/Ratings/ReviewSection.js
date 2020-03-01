import React, { Component } from "react";
import ReviewsHeader from "../ReviewsHeader/ReviewsHeader";
import ReviewRow from "../ReviewRow/ReviewRow";

export default class ReviewSection extends Component {
    render() {
        let totalReviews;
        let avgRating;
        if (typeof this.props.book.reviews !== "undefined") {
            totalReviews = this.props.book.reviews.lenght;

            avgRating = calculateAvgRating(this.props.book.reviews, totalReviews);
        }

        return (
            <div>
                <div>
                    <ReviewsHeader
                        book={this.props.book}
                        avgRating={avgRating}
                        totalReviews={totalReviews}
                    />
                </div>
                <div>
                    {this.props.book.reviews
                        ? this.props.book.reviews.map(review => (
                            <ReviewRow review={review} key={review.id} />
                        ))
                        : undefined}
                </div>
            </div >
        );
    }
}