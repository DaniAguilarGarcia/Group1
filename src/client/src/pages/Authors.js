import React, { Component,useState } from "react";
import Book from "../components/Book";
import Title from '../components/Title';
import styled from "styled-components";
import { BookConsumer } from "../context";
import { get } from "mongoose";

export default class Authors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
  };
}

    getAuthorName(){
        
        var authorpath = this.props.location.pathname
        var vartest = authorpath.split("/")
        var authorOut = vartest[vartest.length -1]
        
        console.log(authorpath)
        console.log(vartest)
        console.log(authorOut)

        return authorOut

    }

  render() {

    return (

      <div className="row">
      <div className="col">

      <React.Fragment>
        <BookWrapper className="py-5">
          <div className="container">
            <Title name= {this.getAuthorName()} title="books" />
            
            <div className="row">
            <BookConsumer>
                    {value => {
                        this.getAuthorName()
                      return value.books.map(book => {
                        
                        if (book.author_name === this.getAuthorName())  {
                          return <Book key={book.id} book={book} />;
                        } else {
                          return <p></p>;
                        }
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

