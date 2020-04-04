import React, { Component } from 'react';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      editing: false,
      error_msg: null,
      errors: {},
    }, props.address);
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
    return fetch(`/api/user/addresses/${this.state._id}`, {
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
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      postal: this.state.postal,
      country: this.state.country,
    };

    return fetch(`/api/user/addresses/${this.state._id}`, {
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
    const {street, city, state, postal, country} = this.state;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-12 col-md-9">
            {`${street} ${city} ${state}, ${postal} ${country}`}
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
          <div className="col-12 col-md-8 mb-2 mb-md-0">
            <button type="submit" className="btn btn-block btn-primary" disabled={this.state.submitting}>Update Address</button>
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

export default Address;
