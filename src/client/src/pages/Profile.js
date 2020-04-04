import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import EditProfile from './profile/EditProfile';
import Orders from './profile/Orders';
import PaymentMethods from './profile/PaymentMethods';
import ShippingAddresses from './profile/ShippingAddresses';
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      user: props.user,
      logged_in: props.logged_in || false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  componentDidMount() {
    if (!this.state.logged_in) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col d-flex flex-column">
          <ul className="nav nav-tabs profile mt-3 flex-order-1" id="myTab" role="tablist">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link"
                to={'/profile'} exact>
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link"
                to={'/profile/orders'} exact>
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link"
                to={'/profile/payment_methods'} exact>
                Payment Methods
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link"
                to={'/profile/shipping'} exact>
                Shipping
              </NavLink>
            </li>
          </ul>
          <div className="card profile">
            <div className="card-body">
              <Switch>
                <Route exact path='/profile'
                  render={(props) => <EditProfile {...props} user={this.state.user} />}
                />
                <Route exact path='/profile/orders'
                  render={(props) => <Orders {...props} user={this.state.user} />}
                />
                <Route exact path='/profile/payment_methods'
                  render={(props) => <PaymentMethods {...props} />}
                />
                <Route exact path='/profile/shipping'
                  render={(props) => <ShippingAddresses {...props} addresses={this.state.user.shipping_addresses} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;