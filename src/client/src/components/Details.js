import React, { Component } from "react";
import { BookConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import Rating from 'material-ui-rating'
import StarRatingComponent from "react-star-rating-component";
import Ratings from "../pages/Ratings";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default class Details extends Component {
  render() {
    return (
      <BookConsumer>
        {value => {
          const {
            id,
            title,
            publication_date,
            author_name,
            publisher,
            genre,
            img,
            info,
            quantity,
            average_rating,
            price,
            inCart,
            inWishList,
          } = value.detailBook;

          return (
            <div className="container py-5">

              {/* title */}
              <div className="row">
                <div className="text-title col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>Title: {title}</h1>
                </div>
              </div> 
              {/* end of title */}

              
              <div className="row">

                {/* image column */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  
                  <Zoom>
                  <img
                  alt="that wanaka tree"
                  src={img}
                  width="300"
                  />
                  </Zoom>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    <strong>
                    Written by: {author_name}
                    </strong>
                  </p>
                  <p className="text-muted lead">Space for Athor Bio</p>

                  <div className="col">
                    <h3>Average rating: {average_rating}</h3>
                    <Rating
                    value={average_rating}
                    max={5}
                    onChange={(i) => console.log('onChange ' + i)}
                    readOnly
                    />

                    <ul class="list-group">
                      <li class="list-group-item">
                       <h6>Review by {Ratings.nickname}</h6>
                      <Rating
                      value={Ratings.rating}
                      max={5}
                      onChange={(i) => console.log('onChange ' + i)}
                      readOnly
                      />
                      <p>{Ratings.comment}</p>
                      </li>
                    </ul>
                  </div>  
                </div>
                {/* image column */}

                {/* prdoduct info colum */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4 className="text-blue mt-3 mb-2">
                    <strong>
                    Written by: {author_name}
                    </strong>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  
                  <h8 className="text-blue">
                      Genre: {genre}
                  </h8>

                  <p className="text-blue">
                      Published by {publisher} on {publication_date} 
                  </p>

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Book Description:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Rating:
                    <Rating
                    value={average_rating}
                    max={5}
                    onChange={(i) => console.log('onChange ' + i)}
                    readOnly
                    />
                  </p>
                  
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to Books</ButtonContainer>
                    </Link>

                    <Link to={{pathname: '/ratings', state: {book: value.detailBook}}}>
                      <ButtonContainer>Rate Book</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </BookConsumer>
    );
  }
}
