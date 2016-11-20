import React, { Component } from 'react';
import Message from './message';

export default class Conversation extends Component {
  _renderMessages() {
    return this.props.messages.map((m,i) => {
      return(
        <Message
          key={i}
          sender={m.sender}
          content={m.content}
          />
      )
    });
  }

  render() {
    return(
      <div>
        {this._renderMessages()}
      </div>
    )
  }
}

