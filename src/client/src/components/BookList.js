import React, { Component,useState,useContext } from "react";
import Book from "./Book";
import Title from './Title';
import styled from "styled-components";
import { BookConsumer, BookContext } from "../context";
import {Pagination} from 'react-bootstrap';

const filterBooks = (books, pageStart, pageEnd, active, count) => {
  var res = [];
  
  if (active === 1){
    pageStart = 1;
    pageEnd = count - 1;
   }else {
    pageStart = count * (active-1);
    pageEnd = pageStart + (count-2);
  }

  for (let i = pageStart; i <= pageEnd; i++){
    if (i >= books.length){
      break;
    }else if(i === pageStart) {
      res.push(books[i-1]);
      res.push(books[i]);
    } else {
      res.push(books[i]);
    }
  }

  return res;

}

const BookList = ({books}) => {

const context = useContext(BookContext);
const {pageStart, pageEnd,pageList, active, count,handleChange} = context;
let bookData = filterBooks(books, pageStart, pageEnd, active, count)
let isData = bookData.length > 0;

    return (

      <div className="row">
      <div className="col">

      <React.Fragment>
        <BookWrapper className="py-5">
          <div className="container">
            <Title name="our" title="books" />

            <select className="select" onChange={handleChange}>
              <option value="10">Books Per Page</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
          
            <div className="row">
              { isData ? ( 
                bookData.map(book => {
                  return <Book key={book.id} book={book} />;
                })) : (<Title name= "Whoops! Looks like we need to restock!"/>)}
            </div>
          
          </div>
        
        </BookWrapper>
       
        <Pagination className = "pagination">{pageList}</Pagination>
      
      </React.Fragment>
      
      </div>
      </div>
    );
  }

const BookWrapper = styled.section``;

export default BookList;

