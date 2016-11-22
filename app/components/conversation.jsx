import React, { Component } from 'react';
import Message from './message';

export default class Conversation extends Component {
  _renderMessages() {
    return this.props.messages.map((m,i) => {
      let authored;
      if (m.sender === this.props.author) {
        authored = true;
      } else {
        authored = false;
      }
      return(
        <Message
          key={i}
          authored={authored}
          content={m.content}
          />
      )
    });
  }

  render() {
    return(
      <div className='conversation'>
        {this._renderMessages()}
      </div>
    )
  }
}

