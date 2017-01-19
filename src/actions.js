import {
  ADD_MESSAGE,
  RECEIVE_MESSAGES,
  TOGGLE_AUTH
} from './constants';

export function addMessage(text, authorUid) {
  return {
    type: ADD_MESSAGE,
    message: { text, authorUid }
  }
}

export function receiveMessages(data) {
  return {
    type: RECEIVE_MESSAGES,
    data
  }
}

export function toggleAuth(user = {}) {
  return {
    type: TOGGLE_AUTH,
    user
  }
}
