import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNav.scss';
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import {Col,Nav, NavDropdown, InputGroup, Form, Button} from 'react-bootstrap';

class MainNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        };
    }

    searchChangeHandler(event){
      this.setState({data: event});
    }
  
    searchSubmitHandler(event){
      this.setState({submit: true});
      this.setState({books: event});
      console.log(this.state.books)
    }

    static getDerivedStateFromProps(props, state) {
      return props;
    }
  
  logout = () => {
    fetch('/api/user/logout', {
      method: 'post',
      credentials: 'include',
    }).then(() => {
      this.props.onLogout();
      this.props.history.push('/');
    }).catch(err => {
      console.error(err);
    });
  }
//style

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
                {this.props.logged_in &&
                <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={this.logout}>Logout</button>
                </li>
            }
            </ul>
        );
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
                    <form className="form-inline my-2 flex-grow-1"> </form>
                   
                  <Link to="/" className="ml-auto">
                      <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-book" />
                        </span>
                        Our Books
                      </ButtonContainer>
                  </Link>             
   
                  <Nav className="justify-content-center" activeKey="/home">
                  <NavDropdown title="Browse By Genre">
                    <NavDropdown.Item href = '/browsing/bygenre/Novel'>Novel</NavDropdown.Item>
                    <NavDropdown.Item href = '/browsing/bygenre/Biography'>Biography</NavDropdown.Item>
                    <NavDropdown.Item href = '/browsing/bygenre/Fantasy'>Fantasy</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Browse By Ratings">
                    <NavDropdown.Item href = '/browsing/byrating/5'><StarRatingComponent 
                              name= "rating" 
                              starCount = {5}
                              value = {5}
                              editing = {false}
                            /></NavDropdown.Item>
                    <NavDropdown.Item href = '/browsing/byrating/4'><StarRatingComponent 
                              name= "rating" 
                              starCount = {5}
                              value = {4}
                              editing = {false}
                            /></NavDropdown.Item>
                    <NavDropdown.Item href = '/browsing/byrating/3'><StarRatingComponent 
                              name= "rating" 
                              starCount = {5}
                              value = {3}
                              editing = {false}
                            /></NavDropdown.Item>
                    <NavDropdown.Item href = '/browsing/byrating/2'><StarRatingComponent 
                              name= "rating" 
                              starCount = {5}
                              value = {2}
                              editing = {false}
                            /></NavDropdown.Item>
                    <NavDropdown.Item href = '/browsing/byrating/1'><StarRatingComponent 
                              name= "rating" 
                              starCount = {5}
                              value = {1}
                              editing = {false}
                            /></NavDropdown.Item>
                  </NavDropdown>
              
                  <Nav.Item>
                    <Link to={'/topsellers'} className="nav-link">Top Sellers</Link>
                  </Nav.Item>
              </Nav>
       
                    
        {this.navRight()}
                
        </div>
            </NavWrapper>
            </container>
        );
    }}
    
const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-ize:1.3rem;
        text-transform:capitalize;    
    }
`
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--white);
  border-color: ${props =>
    props.cart ? "var(--mainBlue)" : "var(--mainBlue)"};
  color: var(--white);
  color: ${props => (props.cart ? "var(--mainBlue)" : "var(--white)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainYellow);
  }
  &:focus {
    outline: none;
  }
`;

export default MainNav;
