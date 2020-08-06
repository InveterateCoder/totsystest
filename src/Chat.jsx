import React from 'react'
import './Chat.css'
import Content from './Content.jsx'
import Input from './Input.jsx'

export default function Chat(props) {
  const { match: { params: { type } } } = props
  const head = type === 'duty' ? 'Работа' : 'Общение'
  return (
    <div className="px-1 m-0">
      <h3 id="head" className="pb-1 mt-3 mb-3">{head}</h3>
      <Content type={type} />
      <Input type={type} />
    </div>
  )
}
