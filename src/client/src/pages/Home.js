import React, { Component } from 'react';
import Axios from 'axios';
import {BookConsumer} from './booksapi';
import BookProduct from '../components/BookProduct';
import SortCheckbox from './sections/SortCheckbox';
import { Link } from 'react-router-dom';


class Home extends Component {
  
  render() {
    const handleFilters = (filters,category) => {
      console.log(filters);
    }

    return (
    <div className="row">
      <div className="col">
        <h3>Home</h3>

        <React.Fragment>
        <SortCheckbox
            handleFilters = {filters => handleFilters(filters,"browseOptions")}
        /></React.Fragment>


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
      </div>
    </div>
    );
  }
}
export default Home;