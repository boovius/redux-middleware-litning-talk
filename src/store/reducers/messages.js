import { ADD_MESSAGE, RECEIVE_MESSAGES } from '../../constants';

const messages = (
  state = [],
  action
) => {
  switch(action.type) {
    case RECEIVE_MESSAGES:
      console.log('receiving messages');
      return Object.keys(action.data).map(key => Object.assign({}, action.data[key], {sunk: true}));
    case ADD_MESSAGE:
      return [...state, Object.assign({}, action.message, {sunk: false})];
    default:
      return state;
  }
};

export default messages
