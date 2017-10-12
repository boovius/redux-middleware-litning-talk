import { ADD_MESSAGE } from '../../constants'
import { messagesRef } from '../../config/firebase'

const synker = store => next => action => {
  const result = next(action);

  if (action.type === ADD_MESSAGE) {
    console.log('pushing to db');
    messagesRef.push(action.message, () => {});
  }

  return result;
}

export default synker;
