import React, { Component } from 'react';
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import {bookData} from '../data';
import {BookConsumer} from './booksapi';
import BookProduct from './../components/BookProduct';

class Books extends Component {

  render() {
    
    return (
    <div className="row">
      <div className="col">
        <h1>Books</h1>
       
       <React.Fragment>
       <div className="py-5">
        <div className = "container">
          <div className = "row">    
            <BookConsumer>
            {value => {
              return value.books.map(book => {
                return <BookProduct key={book.id} book={book} />;
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

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item >{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
          </Pagination>
          </React.Fragment>
          </div>
        </div>
);
}}

export default Books;