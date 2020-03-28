import React, { Component } from 'react';
import './PaymentMethod.scss';

class PaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({
          editing: false,
        }, props.method);
    }

    static getDerivedStateFromProps(props, state) {
      return props;
    }

    sendDelete = (event) => {
      return fetch(`/api/user/methods/${this.state._id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      }).then(async (res) => {
        if (!res.ok) {
          return;
        }
        this.props.onDeleted(this.state._id);  
      }).catch(err => {
        console.error(err);
      });
    }

    render() {
        return (
          <li className="list-group-item d-flex">
            <span className="alias mr-2 font-weight-bold">{this.state.alias}</span>
            <span className="name mr-2">{this.state.payer_name}</span>
            <span className="brand mr-2">{this.state.brand}</span>
            <span className="last_four">{this.state.last_four}</span>
            <button className="btn btn-sm btn-danger ml-auto" onClick={this.sendDelete}>
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
        );
    }
}

export default PaymentMethod;
