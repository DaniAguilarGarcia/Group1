import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNav.scss';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
    }

    static getDerivedStateFromProps(props, state) {
      return props;
    }

    loginItem() {
        if (this.props.logged_in) {
            return (
                <li className="nav-item">
                    <Link to={'./login'} className="nav-link">
                        {this.props.user.name}
                    </Link>
                </li>
            );
        }

        return (
            <li className="nav-item">
                <Link to={'./login'} className="nav-link">
                    Login
                </Link>
            </li>
        );
    }

    navRight() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={'./cart'} className="nav-link">
                        Cart
                    </Link>
                </li>
                {this.loginItem()}
            </ul>
        );
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <Link to={'/'} className="navbar-brand">
                    Book Geeks
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 flex-grow-1">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    {this.navRight()}
                </div>
            </nav>
        );
    }
}

export default MainNav;
