import { ADD_MESSAGE, RECEIVE_USER } from './constants';

export function addMessage(text) {
  return ({
    type: c.ADD_MESSAGE,
    message: { text }
  }
}

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user: {
      id: user.uid,
      displayName: user.displayName,
      email: user.email
    }
  }
}
