import React, { Component } from 'react';
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import BookProduct from './../components/BookProduct';
import {bookData} from '../data';
import {BookConsumer} from './booksapi';

class Books extends Component {

  state = {
    books : bookData
  };

  render() {
    console.log(this.state.books);
    return (
    <div className="row">
      <div className="col">
        <h1>Books</h1>

        <div className = "container">
          <div className = "row">
            <BookConsumer>
            {value => {
              return value.books.map(books => {
                return <BookProduct key={books.id} books={books} />;
              })         
            }}
            </BookConsumer>
            </div>
            </div>
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