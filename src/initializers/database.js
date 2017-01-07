import store from '../store';
import { RECEIVE_MESSAGES } from '../constants';
import { messagesRef } from '../config/firebase';

messagesRef.on('value', ( snapshot ) => {
  console.log('getting snapshot', snapshot.val());
  if (!(snapshot.val() === null)) {
    store.dispatch({
      type: RECEIVE_MESSAGES,
      data: snapshot.val()
    });
  } else {
    console.log('database empty');
  }
});

