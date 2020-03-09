import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import EditProfile from './profile/EditProfile';
import Orders from './profile/Orders';
import Password from './profile/Password';
import PaymentMethods from './profile/PaymentMethods';
import ShippingAddresses from './profile/ShippingAddresses';
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      error_msg: null,
      user: props.user,
      change_password: false,
      logged_in: props.logged_in || false,
      ...props.user,
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

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      error_msg: null,
    });

    fetch('/api/user/login', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then(async (res) => {
      const body = await res.json();
      if (!res.ok) {
        return this.setState({
          error_msg: body.message,
        });
      }

      this.setState({
        logged_in: true,
      });

      this.props.onLogin(body); // user

    }).catch(err => {
      console.error(err);
    });
  }

  onChange(attr, event) {
    this.setState({
      [attr]: event.target.value,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <ul className="nav nav-tabs profile mt-3" id="myTab" role="tablist">
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
                to={'/profile/password'} exact>
                Password
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
                <Route exact path='/profile/password'
                  render={(props) => <Password {...props} user={this.state.user} />}
                />
                <Route exact path='/profile/payment_methods'
                  render={(props) => <PaymentMethods {...props} user={this.state.user} />}
                />
                <Route exact path='/profile/shipping'
                  render={(props) => <ShippingAddresses {...props} user={this.state.user} />}
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