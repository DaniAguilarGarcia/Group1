import React, { Component } from 'react';

class EditProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      address: {},
      ...props.user,
      error_msg: null,
      errors: {},
    };
  }

  onChange(attr, event) {
    if (attr.indexOf('address.') !== -1) {
      const { address } = this.state;
      address[attr.split('address.')[1]] = event.target.value;
      this.setState({
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

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      error_msg: null,
      errors: {},
    });

    return fetch('/api/user/profile', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        name: this.state.name,
        email: this.state.email,
        nickname: this.state.nickname,
        address: this.state.address,
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
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Username" required
              value={this.state.username} onChange={(e) => this.onChange('username', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Name" required
              value={this.state.name} onChange={(e) => this.onChange('name', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Nickname" required
              value={this.state.nickname} onChange={(e) => this.onChange('nickname', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="email" className="form-control" placeholder="email@example.com" required
              value={this.state.email} onChange={(e) => this.onChange('email', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="1234 nw 1st ave"
              value={this.state.address.street} onChange={(e) => this.onChange('address.street', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Townsville"
              value={this.state.address.city} onChange={(e) => this.onChange('address.city', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="State"
              value={this.state.address.state} onChange={(e) => this.onChange('address.state', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Postal"
              value={this.state.address.postal} onChange={(e) => this.onChange('address.postal', e)}/>
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Country"
              value={this.state.address.country} onChange={(e) => this.onChange('address.country', e)}/>
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