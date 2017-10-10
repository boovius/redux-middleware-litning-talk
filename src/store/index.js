import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from './middlewares/logger';

export default createStore(
  rootReducer,
  applyMiddleware(logger)
)

