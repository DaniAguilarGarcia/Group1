import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MainNav.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import Search from './Search';
import { BookConsumer } from '../pages/booksapi';

class MainNav extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
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
                    <Search 
                    filterText= {this.state.filterText}
                    filterUpdate = {this.filterUpdate.bind(this)}
                    />
                    
                    <input type ="text" 
                        value={this.state.search}
                        onChange={(e) => this.searchCallBack(e.target.value)}/>
                    
                       
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
            </nav>
            </container>
        );

}

export default withRouter(MainNav);
