import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './app';

const firebaseConfig = {
  apiKey: "AIzaSyD_killvKpFzOyxvWVZWTCGmzhj1kDNmWM",
  authDomain: "react-fire-c15e8.firebaseapp.com",
  databaseURL: "https://react-fire-c15e8.firebaseio.com",
  storageBucket: "react-fire-c15e8.appspot.com",
  messagingSenderId: "1071356880949"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const messages = db.ref('messages');

messages.on('value', ( snapshot ) => {
  console.log(snapshot.val());
  const messageData = Object.keys(snapshot.val()).map(k => snapshot.val()[k]);
  ReactDOM.render(
    <App messages={messageData}/>,
    document.getElementById('container')
  );
});

if (module.hot) {
  module.hot.accept();
}
