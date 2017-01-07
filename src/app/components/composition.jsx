import React from 'react';
import { connect } from 'react-redux';
import { ADD_MESSAGE } from '../../constants';
import { addMessage } from '../../actions';

export class Composition extends React.Component {
  constructor() {
    super()
    this._updateText = this._updateText.bind(this);
    this._submit = this._submit.bind(this);
  }

  _updateText(e) {
    this.setState({text: e.target.value})
  }

  _submit(e) {
    e.preventDefault();
    const { text } = this.state
    if (text === '' || text === null) return
    this.props.send(text)
    this.setState({text: ''})
  }

  render() {
    return(
      <div className='composition'>
        <form onSubmit={this._submit}>
          <input
            type='text'
            onChange={this._updateText}
          />
          <input type='submit' value='send'/>
        </form>
      </div>
    )
  }
}

export default connect(
  {},
  { send: (text) => { dispatch(addMessage) }} )
(Composition);
