import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BookConsumer} from '../pages/booksapi';
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import {bookData} from '../data';
import StarRatingComponent from "react-star-rating-component";

class BookProduct extends PureComponent {
    
    render() {
       
        const {id, authors, year,title, average_rating,price, image_url, small_image_url ,inCart, filterText} = this.props.book;

        return (
            <ProductWrapper className= "col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <div className="img-container p-5" onClick={()=>console.log("you clicked the img container")}
                >
                <Link to ="/details">
                <img src={image_url} alt="books" className="card-img-top"
                />
                </Link>
                <button 
                    className ="cart-btn" 
                    disabled={inCart ? true : false} 
                    onClick={() => {
                    console.log('added to the cart');
                    }}
                >
                    {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                        {""}
                        inCart
                        </p>
                    ) : (
                        <i className="fa fa-cart-plus"/>
                    )}
                </button>
                <div className="card-title"><h5>{title}</h5></div>
                <div className="card-text">{authors}</div>
                <div className="card-text">{price}</div>
                <div className="card-text"> Rating: {average_rating}</div>
                </div>
                </div>
            </ProductWrapper>

        );
    }
}

const ProductWrapper = styled.div`
`

export default BookProduct