/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';

import './index.css';
import './semantic-ui/semantic.min.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
