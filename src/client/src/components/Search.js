import React, { Component } from 'react'
import Book from "./Book";
import Title from './Title';
import styled from "styled-components";
import { BookConsumer } from "../context";
import axios from 'axios';

class Search extends Component {
   
    constructor(props) {
        super(props);
        console.log(props.match.params.bookname)
        this.state = {
          search:'', 
          books: [],
          title: props.match.params.bookname
        };
    }

    getBook = () => {
        axios.get('http://localhost:5000/books/' + this.state.title)
        .then((response)=>{
          const data = response.data;
          this.setState({ books: data});
          console.log('Data has been received')
          console.log(data)
        })
        .catch(()=> {
          alert('error retrieving data for search');
        });
      }

      componentDidMount() {
        this.getBook();
    
      }

    render() {
   
        return (
           
      <React.Fragment>
          <div className="row">
              <div className = "col">
                  <img src={this.state.books.img}/>

              </div>
          </div>
      
    
      </React.Fragment>



);
}
}
const BookWrapper = styled.section``;
export default Search;