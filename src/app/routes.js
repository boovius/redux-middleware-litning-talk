import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './index';
import Chat from './components/chat';
import Login from './components/login';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Chat} />
    <Route path='login' component={Login} />
  </Route>
)
