import React, { Component } from "react";
import { BookConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import Rating from 'material-ui-rating'
import StarRatingComponent from "react-star-rating-component";
import Ratings from "../pages/Ratings";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import axios from 'axios'

export default class Details extends Component {
  state = {
    wishlists: []
  }

  componentDidMount () {
    axios
      .post(`/wishlists/list`, {
        userId: this.props.user._id
      })
      .then(res => {
        this.setState({
          wishlists: res.data
        })
      })
      .catch(e => console.error(e)) 
  }

  componentDidUpdate () {
    axios
      .post(`/wishlists/list`, {
        userId: this.props.user._id
      })
      .then(res => {
        this.setState({
          wishlists: res.data
        })
      })
      .catch(e => console.error(e)) 
  }

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
            author_bio,
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
                  <div className="col">
                    <h3>Average rating: {average_rating}</h3>
                    <Rating
                    value={average_rating}
                    max={5}
                    onChange={(i) => console.log('onChange ' + i)}
                    readOnly
                    />

                    {/* <ul class="list-group">
                      <li class="list-group-item">
                      <h6>Review by {Ratings.nickname}</h6>
                      <Rating
                      value={this.getRatings.rating}
                      max={5}
                      onChange={(i) => console.log('onChange ' + i)}
                      readOnly
                      />
                      <p>{Ratings.comment}</p>
                      </li>
                    </ul> */}
                  </div> 
                </div>
                {/* image column */}

                {/* prdoduct info colum */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h4>

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    <strong>
                  Written by: <Link to={{'pathname':'/author_books/' + author_name}} className="nav-link">{author_name}</Link>
                    </strong>
                  </p>

                  <p className="text-muted lead">{author_bio}</p> 
                  
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

                    <div className="dropdown">
                      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add/remove in Wishlist
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.state.wishlists.map(wishlist => (
                          <button key={wishlist._id} className="dropdown-item" style={{
                            background: wishlist.bookIds.includes(value.detailBook._id) && '#eee'
                          }} onClick={() => {
                            axios
                              .put(`/wishlists/${wishlist._id}`, {
                                bookId: value.detailBook._id
                              })
                            }}
                          >{wishlist.title}</button>
                        ))}
                        <Link to="/profile/wishlists"><button>Create/Modify Wishlists</button></Link>
                      </div>
                    </div>

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
