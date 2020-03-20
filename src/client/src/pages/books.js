import React, { Component } from 'react';
//import MainNav from '.components/MainNav';

class Books extends Component {
  render() {
    return (
    <div className="row">
      <div className="col">
        <h1>Books</h1>
        <React.Fragment>
          <h3>Testing Subtitle</h3>
        </React.Fragment>
        <div className = "container">
          <div className = "row">
            <div className="col-3">column no. 1</div>
            <div className="col-3">column no. 2</div>
            <div className="col-3">column no. 3</div>
            <div className="col-3">column no. 4</div>
          </div>
        </div>

      </div>
    </div>
    );
  }
}
export default Books;