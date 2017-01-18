import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {open: false};
    this._toggleMenu = this._toggleMenu.bind(this);
  }

  _toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  _displayDropdown() {
    return this.state.open ? 'block' : 'none';
  }

  render () {
    return (
      <div id='navbar'>
        <div className='home'>
          <Link to='/'>Chat</Link>
        </div>
        <div onClick={this._toggleMenu} className='dropdown'>
          <div className='dropdown-title'>menu</div>
          <ul style={{display: this._displayDropdown()}} className='dropdown-content'>
            <li className='link'><Link to='login'>Login</Link></li>
            <li className='link'><Link to='/'>ChatAAAAAAAAAAAAAAAAAAAAA</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

