import React, { Component } from 'react';
import PaymentMethod from '../../components/PaymentMethod';
import CreatePaymentMethod from '../../components/CreatePaymentMethod';

class PaymentMethods extends Component {
  constructor(props) {
    super();
    this.state = {
      methods: [],
    };
    this.getAll();
  }

  getAll = () => {
    return fetch(`/api/user/methods`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }).then(async (res) => {
      const methods = await res.json();
      if (!res.ok) {
        return;
      }

      this.setState({
        methods,
      });

    }).catch(err => {
      console.error(err);
    });
  }

  handleCreated = (method) => {
    this.setState({
      methods: [...this.state.methods, method],
    });
  }

  handleDeleted = (method_id) => {
    const index = this.state.methods.findIndex((m) => m._id == method_id);

    if (index === -1) {
      return;
    }

    this.state.methods.splice(index, 1);

    this.setState({
      methods: this.state.methods,
    });
  }
  
  render() {
    return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {this.state.methods.map((method) => <PaymentMethod method={method} key={method._id} onDeleted={this.handleDeleted}></PaymentMethod>)}
        </ul>
        {this.state.methods.length ? <hr/> : null}
        <h5>Save new card</h5>
        {<CreatePaymentMethod onCreated={this.handleCreated}></CreatePaymentMethod>}
      </div>
    </div>
    );
  }
}
export default PaymentMethods;