import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
