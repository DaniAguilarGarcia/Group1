import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      error_msg: null,
      errors: {},
      logged_in: props.logged_in || false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  componentDidUpdate() {
    if (this.state.logged_in) {
      this.props.history.push('/');
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      error_msg: null,
      errors: {},
    });

    if (!this.passwordsMatch()) {
      return;
    }

    return fetch('/api/user/signup', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    }).then(async (res) => {
      const body = await res.json();
      if (!res.ok) {
        return this.setState({
          error_msg: body._message,
          errors: body.errors,
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

  passwordsMatch() {
      if (!this.state.confirm_password) {
          return true;
      }
      return this.state.password === this.state.confirm_password;
  }

  render() {
    const form = <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Desired Username" required
              value={this.state.username} onChange={(e) => this.onChange('username', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Your Name" required
              value={this.state.name} onChange={(e) => this.onChange('name', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="email" className="form-control" placeholder="email@example.com" required
              value={this.state.email} onChange={(e) => this.onChange('email', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="password" className="form-control" placeholder="Password" required
              value={this.state.password} onChange={(e) => this.onChange('password', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="password" className={`form-control ${this.passwordsMatch() ? '' : 'is-invalid'}`} placeholder="Confirm Password" required
              value={this.state.confirm_password} onChange={(e) => this.onChange('confirm_password', e)}/>
              <span className="invalid-feedback">
                {!this.passwordsMatch() ? 'passwords must match' : ''}
              </span>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Sign Me Up</button>
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
      <div className="row">
        <div className="col">
          <div className="card my-5 mx-auto" style={{maxWidth: '500px'}}>
            <div className="card-body">
              {form}
              {this.state.error_msg ? message : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;