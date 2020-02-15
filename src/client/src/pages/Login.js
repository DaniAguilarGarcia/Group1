import React, { Component } from 'react';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'test_user',
      password: 'AbsoluteUnit1134!',
      error_msg: null,
      logged_in: false,
    };
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

      return this.setState({
        logged_in: true,
      });

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
        <input type="text" placeholder="Username" required
          value={this.state.username} onChange={(e) => this.onChange('username', e)}/>
        <input type="password" placeholder="Password" required
          value={this.state.password} onChange={(e) => this.onChange('password', e)}/>
        <button type="submit">Login</button>
      </form>;

    const message = <span style={{color:'red'}}>{this.state.error_msg}</span>

    const logged_in = <span style={{color:'green'}}>You're logged in</span>

    return (
      <div className="App">
        {!this.state.logged_in ? form : null}
        {this.state.error_msg ? message : null}
        {this.state.logged_in ? logged_in : null}
      </div>
    );
  }
}

export default Login;