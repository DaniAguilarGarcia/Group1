import React, { Component } from 'react';
import {render} from 'react-dom';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar'
  
class Books extends Component {
  render() {
    return (
    <div className="row">
      <div className="col">
        <h1>Books</h1>

        <div className = "container">
          <div className = "row">
            <div className="col-3">column no. 1</div>
            <div className="col-3">column no. 2</div>
            <div className="col-3">column no. 3</div>
            <div className="col-3">column no. 4</div>

        <React.Fragment>
          <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
          </Pagination>
        </React.Fragment>

          </div>
        </div>
      </div>
    </div>


);

}}

export default Books;