/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexLink, hashHistory } from 'react-router';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import UserList from './components/UserList';
import UserDashboard from './components/UserDashboard';

import './index.css';
import './semantic-ui/semantic.min.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={NavBar}>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/users(/:id)' component={UserList}/>
      <Route path='/dashboard' component={UserDashboard}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
