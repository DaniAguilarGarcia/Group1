import React, { PureComponent } from 'react'
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import {bookData} from '../data';
import {BookConsumer} from './booksapi';
import BookProduct from './../components/BookProduct';
import Search from './../components/Search';

class TopSellers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {search:'', data:bookData};
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
                 return <BookProduct key={book.id} book={book}/>;
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