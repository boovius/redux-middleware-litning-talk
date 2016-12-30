const logger = store => next => action => {
  console.log('in middleware')
  console.log('dispatching', action)
  let result = next(action)
  console.log('nextState', store.getState())
  return result
}

export default logger
