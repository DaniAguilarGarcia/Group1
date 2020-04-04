import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
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
import axios from 'axios';
//import { BookConsumer } from "../context";
import Book from "./components/Book";

class App extends Component {

  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: {},
      search: "",
      isbn: '',
    title:  '',
    publication_date:  '',
    edition:  0, 
    quantity: 0,
    price:  '', 
    author:  '',
    publisher:  '', 
    genre:  '',
    book_description:  '',
    books: []
    }
  }

  updateSearch(search){
    this.setState({search});
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
  }

  getBook = () => {
    axios.get('/api')
    .then((response)=>{
      const data = response.data;
      this.setState({ books: data});
      console.log('Data has been received')
    })
    .catch(()=> {
      alert('error retrieving data');
    });
  }
  

  handleChange = (target) =>{
    const {title,value} = target;
    this.setState({[title]:value });
  };

  submit = (event) => {
    event.preventDefault(); //stop browser from refreshing 

    const payload = {
      title: this.state.title
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })

    .then(()=> {
      console.log('Data has been sent to server');
    })
    .catch(()=>{
      console.log('Internal Server error')
    });;
  };

  displayBook = (books) => {
    if(!books.length) return null;

    return books.map((book, index) => (
      <div key = {index}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>

      </div>
    )
    );
  };

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
        <MainNav logged_in={this.state.logged_in} user={this.state.user} search={this.state.search} searchCallBack={this.updateSearch}/> 
        <div className="container main-view">
          <Switch>
            <Route path='/login'
              render={(props) => <Login {...props} logged_in={this.state.logged_in} onLogin={this.handleLogin} />}
            />
            <Route path='/profile'
                render={(props) => <Profile {...props} user={this.state.user} logged_in={this.state.logged_in}/>}
            />
            <Route path='/profile'
                render={(props) => <Profile {...props} user={this.state.user} logged_in={this.state.logged_in}/>}
            />
            <Route path='/register'
              render={(props) => <Register {...props} onLogin={this.handleLogin} />}
            />
            <Route path='/cart' component={Cart} />
            />

            <Route path='/ratings' component={Ratings} />
          
            <Route path="/details" component={Details} />
            <Route path="/topsellers" component={TopSellers} />
            <Route path="/" exact component={BookList} />

              
          </Switch>
          <Modal />
        </div>
      </div>

      </React.Fragment> 
    
  };
}

export default App;