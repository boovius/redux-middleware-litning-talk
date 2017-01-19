import { TOGGLE_AUTH } from '../../constants';

export default function (
  state = {
    isAuthenticated: false
  },
  action = {}
) {
  switch(action.type) {
    case TOGGLE_AUTH:
      return Object.assign({}, { isAuthenticated: !state.isAuthenticated })
    default:
      return state;
  }
}

