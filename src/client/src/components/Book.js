import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BookConsumer } from "../context";
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Rating from 'material-ui-rating';
const { AddCircle, AddCircleOutline, Remove } = require('@material-ui/icons');
const yellow = require('@material-ui/core/colors/yellow').default;
const red = require('@material-ui/core/colors/red').default;

export default class Book extends Component {
  
  render() {
    const { id, author, genre, publication_date, title, img, average_rating, price, inCart } = this.props.book;
    return (
      <BookWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <BookConsumer>
            {value => {
              return (
                 <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.openModal(id);
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </BookConsumer>
          
          
          
          <div className="card-footer d-flex justify-content-between mb-0">
            <h5 className="text-blue font-italic mb-0 align-self-center mb-0">{title}</h5> 
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>

          <div className="card-footer d-flex pb-0 pt-0">
            <span className="mr-1">Author:</span>
            <p className="align-self-center mb-0">{author}</p>
          </div>

          <div className="card-footer d-flex pb-0 pt-0">
            <span className="mr-1">Genre:</span>
            <p className="align-self-center mb-0">{genre}</p>
          </div>

          
          
          <div className="card-footer d-flex pb-0 pt-0">
          <Rating
          value={average_rating}
          max={5}
          onChange={(i) => console.log('onChange ' + i)}
          readOnly
          />
          </div>
        </div>
      </BookWrapper>
    );
  }
}

const BookWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--ligthWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.01s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
