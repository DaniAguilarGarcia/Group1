import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from './components/MainNav';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Cart from './pages/Cart';
import ProductList from './components/shoppingCart/ProductList'
import Ratings from './pages/Ratings';
import BookList from "./components/BookList";
import Details from "./components/Details";
import Modal from "./components/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: {},
      search: ""
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
        <MainNav logged_in={this.state.logged_in} user={this.state.user} onLogout={this.handleLogout} search={this.state.search} searchCallBack={this.updateSearch}/> 
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
                render={(props) => <Cart {...props} logged_in={this.state.logged_in}/>}
            />
        <Route path='/Product'
                render={(props) => <ProductList {...props} logged_in={this.state.logged_in}/>}
            />

            <Route path='/ratings'
            render={(props) => <Ratings {...props} user={this.state.user} logged_in={this.state.logged_in}/>}
            />
            <Route exact path="/" component={BookList} />
            <Route path="/details" component={Details} />
              

          </Switch>
          <Modal />
        </div>
      </div>

      </React.Fragment> 
    
  };
}


export default App;


