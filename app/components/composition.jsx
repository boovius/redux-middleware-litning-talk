import React, { Component } from 'react';

export default class Composition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
    this._updateText = this._updateText.bind(this);
    this._sendAction = this._sendAction.bind(this);
  }

  _updateText(e) {
    const text = e.target.value;
    this.setState({text});
  }

  _sendAction() {
    if (this.state.text === null || this.state.text === '') {
      return
    }

    this.props.action(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return(
      <div>
        <input
          type='text'
          value={this.state.text}
          onChange={this._updateText}
        />
        <button onClick={this._sendAction}>
          send
        </button>
      </div>
    )
  }
}
