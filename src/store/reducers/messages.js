import { ADD_MESSAGE, RECEIVE_MESSAGES } from '../../constants';

const messages = (
  state = [],
  action
) => {
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return Object.keys(action.data).map(key => action.data[key]);
    case ADD_MESSAGE:
      return [...state, {content: action.content}];
    default:
      return state;
  }
};

export default messages
