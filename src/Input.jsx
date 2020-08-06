import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { saveMessage } from './store/actions'

const mapDispatchToProps = {
  saveMessage,
}
let scrollDown = false
function Input(props) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (scrollDown) {
      scrollDown = false
      document.scrollingElement.scrollTo(0, document.scrollingElement.scrollHeight)
    }
  })
  const onChange = ({ target: { value } }) => {
    setText(value.trimLeft())
  }
  function sendMessage() {
    const msg = text.trimRight()
    if (msg) {
      props.saveMessage({
        id: null,
        type: props.type,
        sender: {
          id: 5, name: 'Me',
        },
        datetime: new Date(),
        text: msg,
      })
      setText('')
      scrollDown = true
    }
  }
  function onKeyDown(ev) {
    if (ev.keyCode === 13) {
      sendMessage()
    }
  }
  return (
    <div id="input_shell">
      <div className="input-group container">
        <input
          type="text"
          className="form-control ml-2"
          value={text}
          placeholder="Ввдеите сообщение..."
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className="input-group-append mr-2">
          <button type="button" className="btn btn-success px-3" onClick={sendMessage}>
            <i className="fa fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default connect(null, mapDispatchToProps)(Input)
