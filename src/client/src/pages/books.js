import React, { Component } from 'react';

class Books extends Component {
  render() {
    return (
    <div className="row">
      <div className="col">
        <h1>Books</h1>

        <div className = "container">
          <div className = "row">
            <div className="col-4">column no. 1</div>
            <div className="col-4">column no. 2</div>
            <div className="col-4">column no. 3</div>
          </div>
        </div>

      </div>
    </div>
    );
  }
}
export default Books;