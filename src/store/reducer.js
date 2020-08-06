import { SAVE_MESSAGE, DELETE_MESSAGE } from './actions'

function saveStoreMessages(messages) {
  localStorage.setItem('chat_db', JSON.stringify(messages))
}

export default function reducer(store, action) {
  switch (action.type) {
    case SAVE_MESSAGE: {
      if (!action.payload.id) {
        const messages = [...store.messages, { ...action.payload, id: store.nextId }]
        saveStoreMessages(messages)
        return {
          messages,
          nextId: store.nextId + 1,
        }
      }
      const messages = store.messages.map(msg => {
        if (msg.id === action.payload.id) {
          return {
            ...msg,
            text: action.payload.text,
          }
        }
        return msg
      })
      saveStoreMessages(messages)
      return {
        messages,
        nextId: store.nextId,
      }
    }
    case DELETE_MESSAGE: {
      const messages = store.messages.filter(msg => msg.id !== action.payload)
      saveStoreMessages(messages)
      return {
        messages,
        nextId: store.nextId,
      }
    }
    default: {
      if (store) {
        return store
      }
      let messages = localStorage.getItem('chat_db')
      if (!messages) {
        return store
      }
      messages = JSON.parse(messages).map(msg => ({ ...msg, datetime: new Date(msg.datetime) }))
      const nextId = Math.max(...Array.from(messages, msg => msg.id)) + 1
      return {
        messages,
        nextId,
      }
    }
  }
}
