const logger = store => next => action => {
  console.log('dispatching action ', action);
  return next(action);
}

export default logger;
