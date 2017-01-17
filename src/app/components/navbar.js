import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        navbar
        <Link to='login'>Login</Link>
        <Link to='/'>Chat</Link>
      </div>
    )
  }
}

