import { ADD_MESSAGE } from '../../constants'
import { messagesRef } from '../../database'

const synker = store => next => action => {
  let result;

  console.log('synking message', action.message)

  if (action.type === ADD_MESSAGE) {
    result = next(action)

    console.log('pushing to db')
    messagesRef.push(action.message, () => {
      console.log('syncinng message')
      //next(SYNC_MESSAGE, message.id)
    })
  }
  return result
}

export default synker
