import React from 'react'

function Todo(props) {
  const { index, name, checked } = props
  console.log(props)
  return (
    <li className="todo">
      <div>
        <input
          type="checkbox"
          id={'todo_' + props.index}
          name="todo_text"
          defaultChecked={props.completed}
        />
        <label htmlFor={'todo_' + props.index}>{props.name}</label>
      </div>
      <div>
        <button className="btn_edit">수정</button>
        <button className="btn_delete" onClick={() => props.onRemove(index)}>
          삭제
        </button>
      </div>
    </li>
  )
}

export default Todo
