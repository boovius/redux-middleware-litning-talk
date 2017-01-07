import { RECEIVE_USER } from '../../constants';

export default function (
  state = {},
  action = {}
) {
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, action.user)
    default:
      return state;
  }
}

