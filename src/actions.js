import { ADD_MESSAGE } from './constants';

export function addMessage(text) {
  return ({
    type: c.ADD_MESSAGE,
    text
  })
}
