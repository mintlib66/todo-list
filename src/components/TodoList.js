import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  const todos = props.todos.map(task => (
    <Todo
      key={task.index}
      index={task.index}
      name={task.name}
      completed={task.completed}
      onRemove={props.onRemove}
    ></Todo>
  ))

  return <section className="todo_list">{todos}</section>
}

export default TodoList
