import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNav.scss';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { NavDropdown, Nav, NavItem, NavLink } from 'react-bootstrap';


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({
            search: 'Search'
        }, props);
    }

    updateSeach(event){
        this.setState({search: event.target.value.substr(0,20)});
    }

    static getDerivedStateFromProps(props, state) {
      return props;
    }

    loginItem() {
        if (this.props.logged_in) {
            return (
                <li className="nav-item">
                    <Link to={'/profile'} className="nav-link">
                        {this.props.user.name}
                    </Link>
                </li>
            );
        }

        return (
            <li className="nav-item">
                <Link to={'/login'} className="nav-link">
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
            <container>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <Link to={'/'} className="navbar-brand">
                    Book Geeks
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 flex-grow-1">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.search} onChange = {this.updateSeach.bind(this)}/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>   
                        
                       
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Genres</Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item>Fiction</Dropdown.Item>
        <Dropdown.Item>Non-Fiction</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </Nav.Item>
    <Nav.Item>
    <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Ratings</Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item>Five Star</Dropdown.Item>
        <Dropdown.Item>Four Star</Dropdown.Item>
        <Dropdown.Item>Three Star</Dropdown.Item>
        <Dropdown.Item>Two Star</Dropdown.Item>
        <Dropdown.Item>One Star</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">Top Sellers</Nav.Link>
    </Nav.Item>
  </Nav>
        </form>
                    
                    {this.navRight()}
                </div>
            </nav>
            </container>
        );
    }
}

export default MainNav;
