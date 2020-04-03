import React, { Component } from 'react';
import './PaymentMethod.scss';

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      editing: false,
      cvv: '',
      pan: 'X'.repeat(12) + props.method.last_four,
      submitting: false,
      error_msg: null,
      errors: {},
    }, props.method);
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  onChange(attr, event) {
    this.setState({
      [attr]: event.target.value,
    });
  }

  sendDelete = (event) => {
    return fetch(`/api/user/methods/${this.state._id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }).then(async (res) => {
      if (!res.ok) {
        return;
      }
      this.props.onDeleted(this.state._id);
    }).catch(err => {
      console.error(err);
    });
  }

  sendUpdate = (event) => {
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

    return fetch(`/api/user/methods/${this.state._id}`, {
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
        error_msg: null,
        errors: {},
        editing: false,
        cvv: '',
        pan: 'X'.repeat(12) + body.last_four,
        ...body,
      });

    }).catch(err => {
      console.error(err);
    })
      .finally(() => {
        this.setState({
          submitting: false,
        });
      });
  }

  setEdit = (editing) => {
    this.setState({
      editing,
    });
  }

  listItem() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-12 col-md-9">
            <span className="alias mr-2 font-weight-bold">{this.state.alias}</span>
            <span className="name mr-2">{this.state.payer_name}</span>
            <span className="brand mr-2">{this.state.brand}</span>
            <span className="last_four">{this.state.last_four}</span>
          </div>
          <div className="col-12 col-md-3 d-flex">
            <button className="btn btn-sm btn-outline-primary ml-auto" onClick={() => this.setEdit(true)}>
              edit
            </button>
            <button className="btn btn-sm btn-outline-danger ml-2" onClick={this.sendDelete}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </li>
    );
  }

  editForm() {
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
      <form onSubmit={this.sendUpdate}>
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
        <div className="form-row">
          <div className="col-12 col-md-8 mb-2 mb-md-0">
            <button type="submit" className="btn btn-block btn-primary" disabled={this.state.submitting}>Update Card</button>
          </div>
          <div className="col-12 col-md-4">
            <button className="btn btn-block btn-outline-secondary" disabled={this.state.submitting} onClick={(e) => {e.preventDefault(); this.setEdit(false)}}>Cancel</button>
          </div>
        </div>
      </form>
    );

    return (
      <li className="list-group-item">
        {form}
        {this.state.error_msg ? message : null}
      </li>
    );
  }

  render() {
    if (this.state.editing) {
      return this.editForm();
    }

    return this.listItem();
  }
}

export default PaymentMethod;
