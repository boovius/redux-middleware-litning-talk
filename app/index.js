import React from 'react';

import './stylesheets/normalize.scss';
import './stylesheets/app.scss';

import Chat from './components/chat';

const messages = [
  {
    sender: '1',
    content: 'hello'
  },
  {
    sender: '2',
    content: 'goodbye'
  },
  {
    sender: '1',
    content: 'hello again'
  },
  {
    sender: '2',
    content: 'goodbye again'
  },
  {
    sender: '1',
    content: 'oh come on'
  },
]

export default class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <Chat author='1' messages={messages}/>
      </div>
    )
  }
}

