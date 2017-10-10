import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import { messagesRef } from '../../config/firebase'

export class Composition extends React.Component {
  constructor() {
    super()
    this.state = {text: ''};
    this._updateText = this._updateText.bind(this);
    this._submit = this._submit.bind(this);
  }

  _updateText(e) {
    this.setState({text: e.target.value});
  }

  _submit(e) {
    e.preventDefault();
    if (this.state.text === '') return;
    const action = addMessage(this.state.text, this.props.author)
    messagesRef.push(action.message, () => {});
    this.props.send(action);
    this.setState({text: ''});
  }

  render() {
    return(
      <div className='composition'>
        <form onSubmit={this._submit}>
          <input
            type='text'
            onChange={this._updateText}
            value={this.state.text}
          />
          <input type='submit' value='send'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    author: state.auth.user
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    send: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Composition);
