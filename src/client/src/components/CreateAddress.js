import React, { Component } from 'react';

class CreateAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      error_msg: null,
      errors: {},
      street: '',
      city: '',
      state: '',
      postal: '',
      country: '',
    };
  }

  onChange(attr, event) {
    this.setState({
      [attr]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitting: true,
      error_msg: null,
      errors: {},
    });

    const body = {
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      postal: this.state.postal,
      country: this.state.country,
    };

    return fetch('/api/user/addresses', {
      method: 'POST',
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
        error_msg: null,
        errors: {},
        street: '',
        city: '',
        state: '',
        postal: '',
        country: '',
      });

      this.props.onCreated(body);

    }).catch(err => {
      console.error(err);
    })
    .finally(() => {
      this.setState({
        submitting: false,
      });
    });
  }

  render() {
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

    const form = (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-12 col-md-6 mb-2">
            <input type="text" className="form-control" placeholder="Street" required disabled={this.state.submitting}
              value={this.state.street} onChange={(e) => this.onChange('street', e)} />
          </div>
          <div className="col-12 col-md-6 mb-2">
            <input type="text" className="form-control" placeholder="City" required disabled={this.state.submitting}
              value={this.state.city} onChange={(e) => this.onChange('city', e)} />
          </div>
          <div className="col-12 col-md-4 mb-2">
            <input type="text" className="form-control" placeholder="State" required disabled={this.state.submitting}
              value={this.state.state} onChange={(e) => this.onChange('state', e)} />
          </div>
          <div className="col-12 col-md-4 mb-2">
            <input type="text" className="form-control" placeholder="Postal Code" required disabled={this.state.submitting}
              value={this.state.postal} onChange={(e) => this.onChange('postal', e)} />
          </div>
          <div className="col-12 col-md-4 mb-2">
            <input type="text" className="form-control" placeholder="Country" required disabled={this.state.submitting}
              value={this.state.country} onChange={(e) => this.onChange('country', e)} />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12">
            <button type="submit" className="btn btn-block btn-primary" disabled={this.state.submitting}>Create Address</button>
          </div>
        </div>
      </form>
    );

    return (
      <div>
        {form}
        {this.state.error_msg ? message : null}
      </div>
    );
  }
}

export default CreateAddress;
