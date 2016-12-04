import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './store';
import { messagesRef } from './database/firebase.config';
import { RECEIVE_MESSAGES } from './constants';

console.log(store.getState());

messagesRef.on('value', ( snapshot ) => {
  if (!snapshot.val() === null) {
    store.dispatch({
      type: RECEIVE_MESSAGES,
      data: snapshot.val()
    });
  } else {
    console.log('database empty');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

if (module.hot) {
  module.hot.accept();
}



