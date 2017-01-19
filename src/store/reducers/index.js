import { combineReducers} from 'redux';
import messages from './messages'
import user from './user'
import auth from './auth'

export default combineReducers({
  messages,
  user,
  auth
});
