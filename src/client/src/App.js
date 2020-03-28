 import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.scss';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Ratings from './pages/Ratings';
import Books from './pages/Books';
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
    return (

      <div className="container-fluid">

        <MainNav logged_in={this.state.logged_in} user={this.state.user} search={this.state.search} searchCallBack={this.updateSearch}/> 

        <div className="container main-view">
          <Switch>
            <Route exact path='/' component={Home} />
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
            <Route path='/ratings'  
              render={(props) => <Ratings {...props} user={this.state.user} logged_in={this.state.logged_in}/>} 
            />
            <Route path='/books' component={Books} />
          </Switch>
        </div>
      </div>

       
    )
  };
}

export default App;