import Redux from 'redux';
import rootReducer from './reducers'
import initialState from './initialState'

module.exports = Redux.createStore(rootReducer, initialState);

