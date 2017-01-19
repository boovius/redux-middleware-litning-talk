import {
  ADD_MESSAGE,
  RECEIVE_USER,
  RECEIVE_MESSAGES,
  TOGGLE_AUTH
} from './constants';

export function addMessage(text) {
  return {
    type: ADD_MESSAGE,
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

export function receiveMessages(data) {
  return {
    type: RECEIVE_MESSAGES,
    data
  }
}

export function toggleAuth() {
  return {
    type: TOGGLE_AUTH
  }
}
