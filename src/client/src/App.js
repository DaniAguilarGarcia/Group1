import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from './components/MainNav';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Ratings from './pages/Ratings';
import BookList from "./components/BookList";
import Details from "./components/Details";
import Modal from "./components/Modal";
import TopSellers from "./pages/TopSellers";
import axios,* as others from 'axios';
import ByRating from '../src/pages/Browsing/byRating';
import ByGenre from '../src/pages/Browsing/byGenre';
import Authors from './pages/Authors';
import BookContainer from './components/BookContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: {},
      isbn: '',
      title: '',
      publication_date: '',
      edition: 0,
      quantity: 0,
      price: '',
      author_name: '',
      publisher: '',
      genre: '',
      book_description: '',
      books: [],
      searchField:'',
      sort:''
    }
  }

  checkLoginStatus() {
    fetch('/api/user/me', {
      credentials: 'include',
    }).then(async (res) => {
      this.setState({
        'logged_in': res.ok,
        user: res.ok ? await res.json() : {},
      });
    }).catch((err) => {
      this.setState({
        'logged_in': false,
        user: {},
      });
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
    this.getBook();

    axios.get('');

  }

  getBook = () => {
    axios.get('/books')
      .then((response) => {
        const data = response.data;
        this.setState({ books: data });
        console.log('Data has been received')
      })
      .catch(() => {
        alert('error retrieving data');
      });
  }

  handleLogin = (user) => {
    this.setState({
      logged_in: true,
      user,
    });
  }

  handleLogout = () => {
    this.setState({
      logged_in: false,
      user: {},
    });
  }

  render() {
    
    return <React.Fragment>

      <div className="container-fluid">
        <MainNav logged_in={this.state.logged_in} user={this.state.user} search={this.state.search} searchCallBack={this.updateSearch} onLogout={this.handleLogout}/>
        <div className="container main-view">
    
          <Switch>
            <Route path='/login'
              render={(props) => <Login {...props} logged_in={this.state.logged_in} onLogin={this.handleLogin} />}
            />
            <Route path='/profile'
              render={(props) => <Profile {...props} user={this.state.user} logged_in={this.state.logged_in} />}
            />
            <Route path='/profile'
              render={(props) => <Profile {...props} user={this.state.user} logged_in={this.state.logged_in} />}
            />
            <Route path='/register'
              render={(props) => <Register {...props} onLogin={this.handleLogin} />}
            />
            <Route path='/cart' component={Cart}
              render={(props) => <Cart {...props} logged_in={this.state.logged_in} />}
            />

            <Route path='/ratings/:id'
              render={(props) => <Ratings {...props} user={this.state.user} logged_in={this.state.logged_in} />}
            />
            <Route exact path="/" component={BookContainer} />
            <Route path="/details" render={props => <Details {...props} user={this.state.user} />} />
            <Route path="/topsellers" component={TopSellers} />
            <Route path="/browsing/byrating/:rating" component={ByRating} />
            <Route path="/browsing/bygenre/:genre" component={ByGenre} />
            <Route path="/author_books/:author_name" component={Authors} />

          </Switch>
          <Modal />
        </div>
      </div>

    </React.Fragment>

  };
}

export default App;


