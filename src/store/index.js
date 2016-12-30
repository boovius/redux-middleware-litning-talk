import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import initialState from './initialState'
import logger from './logger'

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger)
)

