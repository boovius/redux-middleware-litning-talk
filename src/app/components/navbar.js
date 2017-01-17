import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render () {
    return (
      <div id='navbar'>
        <div className='home'>
          navbar
        </div>
        <div className='dropdown'>
          menu
          <ul className='dropdown-content'>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='/'>Chat</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

