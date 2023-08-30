import './App.css'
import Form from './components/Form'
import Todo from './components/Todo'

function App(props) {
  const tasks = props.tasks.map(task => (
    <Todo index={task.index} name={task.name} completed={task.completed}></Todo>
  ))

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do 리스트</h1>
      </header>
      <section>
        <Form></Form>
      </section>
      <section className="todo_list">{tasks}</section>
    </div>
  )
}

export default App
