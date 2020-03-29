import React, { Component } from 'react';
import { Link, withRouter , Redirect} from 'react-router-dom';
import './MainNav.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import Search from './Search';
import { BookConsumer } from '../pages/booksapi';
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <Link to={'/'} className="navbar-brand">
                    Book Geeks
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 flex-grow-1">

                    
                    
                   
                    
                       
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
            </container>
        );

}}

export default withRouter(MainNav);