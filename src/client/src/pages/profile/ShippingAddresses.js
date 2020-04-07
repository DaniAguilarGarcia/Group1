import React, { Component } from 'react';
import Address from '../../components/Address';
import CreateAddress from '../../components/CreateAddress';

class ShippingAddresses extends Component {
  constructor(props) {
    super();
    this.state = {
      addresses: props.addresses || [],
    };
  }

  handleCreated = (address) => {
    this.setState({
      addresses: [...this.state.addresses, address],
    });
  }

  handleDeleted = (method_id) => {
    const index = this.state.addresses.findIndex((m) => m._id == method_id);

    if (index === -1) {
      return;
    }

    this.state.addresses.splice(index, 1);

    this.setState({
      addresses: this.state.addresses,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {this.state.addresses.map((address) => <Address address={address} key={address._id} onDeleted={this.handleDeleted}></Address>)}
          </ul>
          {this.state.addresses.length ? <hr/> : null}
          <h5>Save new address</h5>
          {<CreateAddress onCreated={this.handleCreated}></CreateAddress>}
        </div>
      </div>
    );
  }
}
export default ShippingAddresses;