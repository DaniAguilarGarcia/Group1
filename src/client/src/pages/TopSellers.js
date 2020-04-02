import React, { PureComponent } from "react";
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import Book from '../components/Book';
import Title from '../components/Title';
import { storeBooks } from "../data";
import styled from "styled-components";
import { BookConsumer } from "../context";

class TopSellers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {search:'', data:storeBooks};
    }

    searchChangeHandler(search){
      this.setState({search : search});
      var filtered = this.state.data.filter( (book) =>{
        return book.title.indexOf(this.state.search) !== -1;
      })
      this.setState({data : filtered});
      console.log(this.state.data)
    }

      render() {
    
    
        return (
        
        <div className="row">
          <div className="col">

          <input type ="text" 
                value={this.state.search}
                onChange={(e) => this.searchChangeHandler(e.target.value)}
                       />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>


            <h1>Top Sellers</h1>
           
           <React.Fragment>
           <div className="py-5">
            <div className = "container">
              <div className = "row"> 
              
              <BookConsumer>
              { value => {
                return this.state.data.map(book => {
                 return <Book key={book.id} book={book}/>;
              })         
              }}
                </BookConsumer>
              
                </div>
                </div> </div>
                </React.Fragment>
               
              <React.Fragment>
              <Pagination>  
              <Pagination.Item active>{1}</Pagination.Item>
              </Pagination>
              </React.Fragment>
              </div>
            </div>
    );
    }}
    
export default TopSellers