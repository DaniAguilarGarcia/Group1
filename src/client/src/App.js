import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Ratings from './pages/Ratings';
/*import Ratings from './Ratings/Stars'; /*review*/
import Books from './pages/books';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: {},
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
  }

  handleLogin = (user) => {
    this.setState({
      logged_in: true,
      user,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <MainNav logged_in={this.state.logged_in} user={this.state.user} />
        <div className="container main-view">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login'
              render={(props) => <Login {...props} logged_in={this.state.logged_in} onLogin={this.handleLogin} />}
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
            <Route path='/books' component={Books} />
          </Switch>
        </div>
      </div>
    )
  };
}

export default App;
