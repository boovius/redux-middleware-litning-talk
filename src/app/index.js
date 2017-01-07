import React from 'react';

import './stylesheets/normalize.scss';
import './stylesheets/app.scss';

import Chat from './components/chat';

export default class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <Chat />
      </div>
    )
  }
}

