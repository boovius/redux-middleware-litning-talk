import React, { Component } from 'react';

import './stylesheets/normalize.scss';
import './stylesheets/app.scss';

import Navbar from './components/navbar';

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

