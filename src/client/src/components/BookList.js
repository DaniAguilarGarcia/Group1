import React, { Component } from "react";
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import Book from "./Book";
import Title from './Title';
import styled from "styled-components";
import { BookConsumer } from "../context";
import axios from 'axios';
//import Search from '../components/Search';

export default class BookList extends Component {
  state = {
    books: []
  };

  getBook = () => {
    axios.get('http://localhost:5000/books/')
    .then((response)=>{
      const data = response.data;
      this.setState({ books: data});
      console.log('Data has been received')
    })
    .catch(()=> {
      alert('error retrieving data for booklist');
    });
  }
  

  render() {

    return (

      <div className="row">
      <div className="col">

      <React.Fragment>
        <BookWrapper className="py-5">
          <div className="container">
            <Title name="our" title="books" />
            <div className="row">
              <BookConsumer>
                {value => {
                  return value.books.map(book => {
                    return <Book key={book.id} book={book} />;
                  });
                }}
              </BookConsumer>
            </div>
          </div>
        </BookWrapper>
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
  }
}

const BookWrapper = styled.section``;
