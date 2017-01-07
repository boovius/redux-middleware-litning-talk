import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import initialState from './initialState'
import logger from './middlewares/logger'
import synker from './middlewares/synker'

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger, synker)
)

