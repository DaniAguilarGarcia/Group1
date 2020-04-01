import React, { Component } from "react";
import { BookConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Rating from 'material-ui-rating'
export default class Details extends Component {
  render() {
    return (
      <BookConsumer>
        {value => {
          const {
            id,
            title,
            publication_date,
            author,
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
                  <img src={img} className="img-fluid" alt="" />
                  
                </div>
                {/* image column */}

                {/* prdoduct info colum */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4 className="text-blue mt-3 mb-2">
                    <strong>
                    Written by: {author}
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
