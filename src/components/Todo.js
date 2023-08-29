import React from 'react'

function Todo(props) {
  return (
    <li className="todo">
      <div>
        <input
          type="checkbox"
          name=""
          id={'todo_' + props.index}
          defaultChecked={props.completed}
        />
        <label for={'todo_' + props.index}>{props.name}</label>
      </div>
      <div>
        <button className="btn_edit">수정</button>
        <button className="btn_delete">삭제</button>
      </div>
    </li>
  )
}

export default Todo
