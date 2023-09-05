import { useCallback, useRef, useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

function App(props) {
  const [todos, setTodos] = useState(props.tasks)

  const nextId = useRef(3)
  const onInsert = useCallback(
    text => {
      const todo = {
        index: nextId.current,
        name: text,
        checked: false,
      }
      setTodos([...todos, todo])
      nextId.current++
    },
    [todos]
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do 리스트</h1>
      </header>
      <InputForm onInsert={onInsert}></InputForm>
      <TodoList tasks={todos}></TodoList>
    </div>
  )
}

export default App
