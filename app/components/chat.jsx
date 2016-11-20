import React from 'react';
import Conversation from './conversation';
import Composition from './composition';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      messages: this.props.messages
    };
  }

  addMessage(text) {
    let messages = this.state.messages;
    messages.push({sender: '', content: text});
    this.setState({messages});
  }

  render(){
    return (
      <div>
        <Conversation messages={this.state.messages} />
        <Composition action={this.addMessage} />
      </div>
    )
  }
}
