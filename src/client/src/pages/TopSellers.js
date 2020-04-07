import React, { PureComponent } from "react";
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import Book from '../components/Book';
import Title from '../components/Title';
import styled from "styled-components";

import { BookConsumer } from "../context";
import BookList from "../components/BookList";
import axios from 'axios';
import {Container, Col, Row, Nav, NavDropdown, Image, InputGroup, Form, Button} from 'react-bootstrap';
import { Search} from 'react-bootstrap-icons';

class TopSellers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          search:'', 
          books: [],
          submit: false, 
          data : {},
          topSellers :[],
          isTopSeller:false,
        };
    }
  
    getBook = () => {
      axios.get('http://localhost:5000/books/')
      .then((response)=>{
        const data = response.data;
        this.setState({ books: data});
        this.setState({ modalBook: data});
        this.setState({detailsBooks: data});
        console.log('Data has been received')
      })
      .catch(()=> {
        alert('error retrieving data for context');
      });
    }
    
    
      render() {   
        
        return (
        
        <div className="row">
          <div className="col">

            <h1>Top Sellers</h1>



            <React.Fragment>
              <div className="py-5">
                <div className = "container">
                  <div className = "row"> 
                  
                  <BookConsumer>
                    {value => {
                      return value.books.map(book => {
                        if (book.isTopSeller) {
                          return <Book key={book.id} book={book} />;
                        } else {
                          return <p></p>;
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
    
export default TopSellers