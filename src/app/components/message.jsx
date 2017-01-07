import React, { Component } from 'react';

export default class Message extends Component {
  _classes() {
    let classes = 'message'
    const { sunk, authored } = this.props
    if (sunk) {
      classes += ' sunk'
    } else {
      classes += ' unsunk'
    }
    if (authored) {
      classes += ' authored'
    } else {
      classes += ' received'
    }
    return classes
  }

  render() {
    return(
      <div className='message-container'>
        <div className={this._classes()}>
          {this.props.text}
        </div>
      </div>
    )
  }
}
