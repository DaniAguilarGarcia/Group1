import React, { Component } from 'react';
import { BookConsumer } from "../../context";
import Book from '../../components/Book';

class ByTitle extends Component {
    
      render() {   
        
        return (
        
        <div className="row">
          <div className="col">

            <h1>Sorted By Title</h1>

            <React.Fragment>
              <div className="py-5">
                <div className = "container">
                  <div className = "row"> 
                  
                  <BookConsumer>
                    {value => {
                      return value.books.map(book => {
                        if (book.genre === this.state) {
                          return <Book key={book.id} book={book} />;
                        } else {
                          return null;
                        }
                      });
                    }}
                    
                  </BookConsumer>

                  </div>
                </div> 
              </div>
            </React.Fragment>
          </div>
        </div>
    );
    }}
    

export default ByRating