import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';

export class Conversation extends Component {
  _renderMessages() {
    const { messages, user } = this.props;
    return messages.map((message) => {
      const authored = message.authorUid === user.uid;
      return(
        <Message
          key={i}
          authored={authored}
          author={user.displayName}
          text={m.text}
          sunk={m.sunk}
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

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages,
    user: state.user
  }
}

export default connect(mapStateToProps)(Conversation);
