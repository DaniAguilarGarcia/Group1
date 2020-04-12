import React, { Component,useState } from "react";
import Book from "./Book";
import Title from './Title';
import styled from "styled-components";
import { BookConsumer } from "../context";
import BookContainer from '../components/Sorting/BookContainer'

export default class BookList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
  };
}

  render() {

    return (

      <div className="row">
      <div className="col">

      <React.Fragment>
        <BookWrapper className="py-5">
          <div className="container">
            <Title name="our" title="books" />
            
            <BookContainer/>

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
      </div>
      </div>

    
    
    );
  }
}

const BookWrapper = styled.section``;
