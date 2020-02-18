import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: 'test_user',
      password: 'AbsoluteUnit1134!',
      error_msg: null,
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

    const form = <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <input type="text" className="form-control" placeholder="Username" required
              value={this.state.username} onChange={(e) => this.onChange('username', e)}/>
          </div>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <input type="password" className="form-control" placeholder="Password" required
              value={this.state.password} onChange={(e) => this.onChange('password', e)}/>
          </div>
          <div className="col-12 mt-2">
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </div>
        </div>
      </form>;

    const message = <span style={{color:'red'}}>{this.state.error_msg}</span>

    const logged_in = <span style={{color:'green'}}>You're logged in</span>

    return (
      <div className="row">
        <div className="col">
          <div className="card my-5 mx-auto" style={{maxWidth: '500px'}}>
            <div className="card-body">
              {!this.state.logged_in ? form : null}
              {this.state.error_msg ? message : null}
              {this.state.logged_in ? logged_in : null} 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;