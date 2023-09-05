import React, { useState, useRef } from 'react'

function InputForm(props) {
  const [name, setName] = useState('')
  const todoInput = useRef()

  const handleSubmit = e => {
    props.onInsert(name)
    setName('')
    todoInput.current.focus()
    e.preventDefault()
  }
  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="todo_input"
          onChange={handleChange}
          value={name}
          placeholder="오늘의 할 일을 입력하세요"
          ref={todoInput}
        />
        <button type="submit" className="btn_add">
          추가
        </button>
      </div>
    </form>
  )
}

export default InputForm
