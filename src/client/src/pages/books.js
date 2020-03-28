import React, { Component } from 'react';
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import {bookData} from '../data';
import {BookConsumer} from './booksapi';
import BookProduct from './../components/BookProduct';
import Search from './../components/Search';

class Books extends Component {

  constructor(props) {
    super(props);
}


  render() {

    return (
    
    <div className="row">
      <div className="col">
        <h3>Books</h3>
       
       <React.Fragment>
       <div className="py-5">
        <div className = "container">
          <div className = "row"> 
          <BookConsumer>
            {value => {
              return value.books.map(book => {
                return <BookProduct key={book.id} book={book}  />;
              })         
            }}
            </BookConsumer>
          
            </div>
            </div> </div>
            </React.Fragment>
           
          <React.Fragment>
          <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
          <Pagination.Last />
          </Pagination>
          </React.Fragment>
          </div>
        </div>
);
}}

export default Books;