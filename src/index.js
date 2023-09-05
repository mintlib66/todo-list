import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const tasks = [
  { name: '할일1', completed: true, index: '0' },
  { name: '할일22', completed: false, index: '1' },
  { name: '투두33333', completed: true, index: '2' },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App tasks={tasks} />
  </React.StrictMode>
)
