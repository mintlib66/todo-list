import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const data = [
  { name: '할일1', completed: true, index: '1' },
  { name: '할일22', completed: false, index: '2' },
  { name: '투두33333', completed: true, index: '3' },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App tasks={data} />
  </React.StrictMode>
)
