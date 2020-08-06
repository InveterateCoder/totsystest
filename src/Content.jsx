import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteMessage } from './store/actions'
import Message from './Message.jsx'

const mapStateToProps = (store, ownProps) => {
  const { type } = ownProps
  return {
    messages: store.messages.filter(msg => msg.type === type),
  }
}
const mapDispatchToProps = {
  deleteMessage,
}

function Content(props) {
  const { type } = props
  useEffect(() => {
    document.scrollingElement.scrollTo(0, document.scrollingElement.scrollHeight)
  }, [type])
  const { messages } = props
  const deleteMsg = (msg) => props.deleteMessage(msg)
  return (
    <div id="chat_content" className="m-1">
      {
        messages.map(msg => (
          <Message key={msg.id} message={msg} deleteMessage={deleteMsg} />
        ))
      }
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)
