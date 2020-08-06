/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { deleteMessage, saveMessage } from './store/actions'
import avatar from './assets/avatar.png'

const months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек']

const mapDispatchToProps = {
  deleteMessage,
  saveMessage,
}

function Message(props) {
  const [show, setShow] = useState(false)
  const textAreaRef = useRef()
  const myId = 5
  const { message } = props
  const me = message.sender.id === myId
  function formTime() {
    const { datetime } = message
    return (
      <small>
        <i>
          {`${months[datetime.getMonth()]} ${datetime.getDate()}, ${datetime.getFullYear()}`}
          &nbsp;
          <code>{`${datetime.getHours()}:${datetime.getMinutes()}`}</code>
        </i>
      </small>
    )
  }
  function deleteMsg() {
    // eslint-disable-next-line no-alert
    if (window.confirm('Удалить сообщение?')) {
      props.deleteMessage(message.id)
    }
  }
  function editMsg() {
    const text = textAreaRef.current.value.trim()
    if (text) {
      props.saveMessage({ id: message.id, text })
      setShow(false)
    }
  }
  function editKeyDown(ev) {
    if (ev.keyCode === 13) {
      editMsg()
    }
  }
  return (
    <div className={`media p-3${me ? ' float-right' : ''}`}>
      {
        !me
        && <img src={avatar} alt="avatar" className="mr-3 mt-1" style={{ width: 60, userSelect: 'none' }} draggable={false} />
      }
      <div className={`media-body${me ? ' text-right' : ''}`}>
        <h5>
          {
            !me
              ? message.sender.name
              : (
                <>
                  <button type="button" className="btn btn-sm" onClick={() => setShow(true)}><i className="fa fa-cog" /></button>
                  <button type="button" className="btn btn-sm" onClick={deleteMsg}><i className="fa fa-trash" /></button>
                </>
              )
          }
          &nbsp;
          {formTime()}
        </h5>
        <p>{message.text}</p>
      </div>
      {
        me
        && <img src={avatar} alt="avatar" className="ml-3 mt-1" style={{ width: 60, userSelect: 'none' }} draggable={false} />
      }
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <textarea ref={textAreaRef} onKeyDown={editKeyDown} style={{ resize: 'none' }} className="form-control">{message.text}</textarea>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShow(false)}>Отмена</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={editMsg}>Сохранить</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default connect(null, mapDispatchToProps)(Message)
