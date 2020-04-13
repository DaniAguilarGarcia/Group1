import React, { Component } from 'react';

class EditProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      address: {},
      ...props.user,
      password: '',
      confirm_password: '',
      error_msg: null,
      errors: {},
    };
  }

  onChange(attr, event) {
    if (attr.indexOf('address.') !== -1) {
      const { address } = this.state;
      address[attr.split('address.')[1]] = event.target.value;
      return this.setState({
        address,
      });
    }

    this.setState({
      [attr]: event.target.value,
    });
  }

  componentDidMount() {
    if (!this.state.username) {
      this.props.history.push('/');
    }
  }

  passwordsMatch() {
      if (!this.state.confirm_password) {
          return true;
      }
      return this.state.password === this.state.confirm_password;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.passwordsMatch()) {
      return;
    }

    this.setState({
      error_msg: null,
      errors: {},
    });

    const body = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      nickname: this.state.nickname,
      address: this.state.address,
    };

    if (this.state.password) {
      if (!this.passwordsMatch()) {
        return;
      }
      body.password = this.state.password;
    }

    return fetch('/api/user/profile', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(async (res) => {
      const body = await res.json();
      if (!res.ok) {
        return this.setState({
          error_msg: body._message,
          errors: body.errors,
        });
      }

      this.setState({
        ...body,
        error_msg: null,
        errors: {},
      });

    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    const form = <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-12">
            <h4>Profile</h4>
          </div>
          <div className="col-12 col-md-3 mb-2">
            <input type="text" className="form-control" placeholder="Username" required
              value={this.state.username} onChange={(e) => this.onChange('username', e)}/>
          </div>
          <div className="col-12 col-md-3 mb-2">
            <input type="email" className="form-control" placeholder="email@example.com" required
              value={this.state.email} onChange={(e) => this.onChange('email', e)}/>
          </div>
          <div className="col-12 col-md-3 mb-2">
            <input type="text" className="form-control" placeholder="Name" required
              value={this.state.name} onChange={(e) => this.onChange('name', e)}/>
          </div>
          <div className="col-12 col-md-3 mb-2">
            <input type="text" className="form-control" placeholder="Nickname"
              value={this.state.nickname} onChange={(e) => this.onChange('nickname', e)}/>
          </div>
          <div className="col-12">
            <hr/>
            <h4>Password</h4>
            <div className="row">
              <div className="col-12 col-md-6 mb-2">
                <input type="password" className="form-control" placeholder="New Password"
                  value={this.state.password} onChange={(e) => this.onChange('password', e)}/>
              </div>
              {this.state.password.length > 0 &&
              <div className="col-12 col-md-6 mb-2">
                <input type="password" className={`form-control ${this.passwordsMatch() ? '' : 'is-invalid'}`} placeholder="Confirm Password"
                  value={this.state.confirm_password} onChange={(e) => this.onChange('confirm_password', e)} required/>
                <span className="invalid-feedback">
                  {!this.passwordsMatch() ? 'passwords must match' : ''}
                </span>
              </div>
              }
            </div>
          </div>
          <div className="col-12 mb-3">
            <hr/>
            <h4>Address</h4>
            <div className="row">
              <div className="col-12 mb-2">
                <input type="text" className="form-control" placeholder="1234 nw 1st ave"
                  value={this.state.address.street} onChange={(e) => this.onChange('address.street', e)}/>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <input type="text" className="form-control" placeholder="Townsville"
                  value={this.state.address.city} onChange={(e) => this.onChange('address.city', e)}/>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <input type="text" className="form-control" placeholder="State"
                  value={this.state.address.state} onChange={(e) => this.onChange('address.state', e)}/>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <input type="text" className="form-control" placeholder="Postal"
                  value={this.state.address.postal} onChange={(e) => this.onChange('address.postal', e)}/>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <input type="text" className="form-control" placeholder="Country"
                  value={this.state.address.country} onChange={(e) => this.onChange('address.country', e)}/>
              </div>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Update Profile</button>
          </div>
        </div>
      </form>;

    const errors = Object.keys(this.state.errors)
      .map((attr, i) => {
        return <li key={`${attr}-${i}`}>
          <strong>{attr}: </strong> {this.state.errors[attr].message}
        </li>
      })

    const message = <div className="text-danger mt-3">
      {this.state.error_msg}
      <ul className="m-0">{errors}</ul>
    </div>

    return (
      <div>
        {form}
        {this.state.error_msg ? message : null}
      </div>
    );
  }
}
export default EditProfile;