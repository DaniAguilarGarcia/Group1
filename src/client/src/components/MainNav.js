import React, { Component } from 'react';
import { Link, withRouter , Redirect} from 'react-router-dom';
import './MainNav.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import Search from './Search';
import { BookConsumer } from '../pages/booksapi';
<<<<<<< HEAD
import StarRatingComponent from "react-star-rating-component";

class MainNav extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign(
      {search: '',
      submit : false,
      bookData : {}
  }, props
      
      );
  }
=======
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
>>>>>>> remotes/origin/bookDetails/Brayan

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  searchChangeHandler(search){
    this.setState({search: search});
  }

  /*searchSubmitHandler(event){
    var n;
    var book;
    for (n in data.books){
      if (event === data.books[n].title){
        this.setState({bookData: data.books[n].id})
        break;
      }
    }
    <Redirect></Redirect to= "">
  }*/

<<<<<<< HEAD
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

  loginItem() {
    if (this.props.logged_in) {
      return (
        <li className="nav-item">
          <Link to={'/profile'} className="nav-link">
            {this.props.user.name}
          </Link>
        </li>
      );
=======
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
>>>>>>> remotes/origin/bookDetails/Brayan
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
        <li className="nav-item">
          <Link to="/ratings" className="nav-link">Ratings</Link>
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

    render() {

        return (
            <container>
<<<<<<< HEAD
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <Link to={'/'} className="navbar-brand">
                    Book Geeks
                </Link>
=======
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to={'/'} className="navbar-brand">
                    Book Geeks
                </Link>    
>>>>>>> remotes/origin/bookDetails/Brayan

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 flex-grow-1">
<<<<<<< HEAD

                    
                    
                   
                    
                       
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Dropdown as={NavItem}>
=======
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
>>>>>>> remotes/origin/bookDetails/Brayan
        <Dropdown.Toggle as={NavLink}>Genres</Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item>Fiction</Dropdown.Item>
        <Dropdown.Item>Non-Fiction</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
<<<<<<< HEAD
    </Nav.Item>
    <Nav.Item>
    <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Browse By Ratings</Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item>
        <StarRatingComponent
              name="rating"
              starCount={5}
              value={5} 
              editing={false} 
        />
        </Dropdown.Item>
        <Dropdown.Item>
        <StarRatingComponent
              name="rating"
              starCount={5}
              value={4} 
              editing={false} 
        />
        </Dropdown.Item>
        <Dropdown.Item>
        <StarRatingComponent
              name="rating"
              starCount={5}
              value={3} 
              editing={false} 
        /></Dropdown.Item>
        <Dropdown.Item>
        <StarRatingComponent
              name="rating"
              starCount={5}
              value={2} 
              editing={false} 
        />
        </Dropdown.Item>
        <Dropdown.Item><StarRatingComponent
              name="rating"
              starCount={5}
              value={1} 
              editing={false} 
        /></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </Nav.Item>
    <Nav.Item>
    <Link to={'./topsellers'} className="nav-link">
            Topsellers
          </Link>
    <Link to={'./books'} className="nav-link">
            All Books
          </Link>
    </Nav.Item>
    <Link to={'./ratings'} className="nav-link">
            Ratings
          </Link>
    

  </Nav>
        </form>
        
                    {this.navRight()}
                </div>
            </nav>
=======
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
>>>>>>> remotes/origin/bookDetails/Brayan
            </container>
        );

<<<<<<< HEAD
}}

export default withRouter(MainNav);
=======
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
>>>>>>> remotes/origin/bookDetails/Brayan
