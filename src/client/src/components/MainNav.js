import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNav.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import Search from './Search';
import { BookConsumer } from '../pages/booksapi';
import { ButtonContainer } from "./Button";
import book_Icon from '../book_Icon.svg'
import styled from "styled-components"

class MainNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        };
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
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus " />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
                </li>
                {this.loginItem()}
            </ul>
        );
    }

    render() {

        return (
            <container>
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to={'/'} className="navbar-brand">
                    Book Geeks
                </Link>    

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 flex-grow-1">
                    <input type ="text" 
                        value={this.state.search}
                        onChange={(e) => this.searchCallBack(e.target.value)}/>

          
                <Link to="/" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-book" />
                        </span>
                        Our Books
                    </ButtonContainer>
                </Link>             
                       
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
        <Dropdown.Item><i class="fa fa-star" size="2x" color='yellow'/></Dropdown.Item>
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
            </NavWrapper>
            </container>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-ize:1.3rem;
        text-transform:capitalize;    
    }
`

export default MainNav;
