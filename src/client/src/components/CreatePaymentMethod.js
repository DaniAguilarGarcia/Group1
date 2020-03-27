import React, { Component } from 'react';

class CreatePaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      error_msg: null,
      errors: {},
      alias: '',
      payer_name: '',
      pan: '',
      exp: '',
      cvv: '',
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
      alias: this.state.alias,
      payer_name: this.state.payer_name,
      pan: this.state.pan,
      exp: this.state.exp,
      cvv: this.state.cvv,
    };

    return fetch('/api/user/methods', {
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
        alias: '',
        payer_name: '',
        pan: '',
        exp: '',
        cvv: '',
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
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Name on Card" required disabled={this.state.submitting}
              value={this.state.payer_name} onChange={(e) => this.onChange('payer_name', e)} />
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Card Number" required disabled={this.state.submitting}
              value={this.state.pan} onChange={(e) => this.onChange('pan', e)} />
          </div>
          <div className="col-6 mb-2">
            <input type="text" className="form-control" placeholder="Card Exp" required disabled={this.state.submitting}
              value={this.state.exp} onChange={(e) => this.onChange('exp', e)} />
          </div>
          <div className="col-6 mb-2">
            <input type="text" className="form-control" placeholder="Card CVV" required disabled={this.state.submitting}
              value={this.state.cvv} onChange={(e) => this.onChange('cvv', e)} />
          </div>
          <div className="col-12 mb-2">
            <input type="text" className="form-control" placeholder="Card Alias" disabled={this.state.submitting}
              value={this.state.alias} onChange={(e) => this.onChange('alias', e)} />
          </div>
        </div>
        <button type="submit" className="btn btn-block btn-primary" disabled={this.state.submitting}>Save Card</button>
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

export default CreatePaymentMethod;
