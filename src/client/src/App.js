<<<<<<< HEAD
import React, { Component } from 'react';
=======
 import React, { Component } from 'react';
>>>>>>> remotes/origin/bookDetails/Brayan
import { Route, Switch} from 'react-router-dom';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from './components/MainNav';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Ratings from './pages/Ratings';
<<<<<<< HEAD
import Books from './pages/Books';
import TopSellers from './pages/TopSellers';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = require('../src/data');
=======
import BookList from "./components/BookList";
import Details from "./components/Details";
import Modal from "./components/Modal";



>>>>>>> remotes/origin/bookDetails/Brayan

class App extends Component {

  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: {},
<<<<<<< HEAD
      search: ''
    }
  }

  
=======
      search: ""
    }
  }

  updateSearch(search){
    this.setState({search});
  }
>>>>>>> remotes/origin/bookDetails/Brayan

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
<<<<<<< HEAD
    return (

      <div className="container-fluid">

        <MainNav logged_in={this.state.logged_in} user={this.state.user} search={this.state.search} searchCallBack={this.updateSearch}/> 

=======
    return <React.Fragment>

      <div className="container-fluid">
        <MainNav logged_in={this.state.logged_in} user={this.state.user} search={this.state.search} searchCallBack={this.updateSearch}/> 
>>>>>>> remotes/origin/bookDetails/Brayan
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
<<<<<<< HEAD
            <Route path='/books' component={Books} />    
            <Route path='/home' component={Home} /> 
            <Route path='/topsellers' component={TopSellers } /> 
            

            <Route path='/ratings'  
              render={(props) => <Ratings {...props} user={this.state.user} logged_in={this.state.logged_in}/>} 
            />
            <Route path='/books' component={Books} />

=======
            <Route exact path="/" component={BookList} />
            <Route path="/details" component={Details} />
              
>>>>>>> remotes/origin/bookDetails/Brayan
          </Switch>
          <Modal />
        </div>
      </div>

<<<<<<< HEAD
       
    )
=======
      </React.Fragment> 
    
>>>>>>> remotes/origin/bookDetails/Brayan
  };
}

export default App;