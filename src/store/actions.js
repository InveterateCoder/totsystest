export const SAVE_MESSAGE = 'save_message'
export const DELETE_MESSAGE = 'delete_message'

export const saveMessage = message => (
  {
    type: SAVE_MESSAGE,
    payload: message,
  }
)
export const deleteMessage = id => (
  {
    type: DELETE_MESSAGE,
    payload: id,
  }
)
