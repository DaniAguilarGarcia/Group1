import React, { Component } from "react";
import {render} from 'react-dom';
import ListPagination from '../pages/pagination';
import Navbar from 'react-bootstrap/Navbar';
import Book from "./Book";
import Title from './Title';
import styled from "styled-components";
import { BookConsumer } from "../context";
import axios from 'axios';

export default class BookList extends Component {
  state = {
    books: [],
    activePage : 1,
    pageSize : 10,
    length : 1
  };

  handleSelectPage(newPage) {
    this.setState({
      activePage: newPage
    });
  }

  pageDisplay(){
   return <div className = 'col'>
                  <ListPagination
                    activePage={this.state.activePage}
                    items={Math.ceil(this.state.length / this.state.pageSize)}
                    onSelect={this.handleSelectPage}
                  />
                </div>
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
                  
                    return <Book key={book.id} book={book}/> ;
                   
                  });
                }}
              </BookConsumer>
              {this.pageDisplay()}
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
