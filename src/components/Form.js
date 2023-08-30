import React, { useState } from 'react'

function handleSubmit(e){
    const [name, setName] = useState("");
    e.preventDefault();
    props.addTask(name);
}

function handleChange(e){
    setName(e.target.value);
}

function addTask(name){
    const newTask = {id:"id", completed: false};
}

function Form(props) {
  return (
    <form className="todo_form">
      <div>
        <input type="text" id="todo_input" onChange={handleChange}/>
        <button className="btn_add" onClick={handleSubmit}>추가</button>
      </div>
    </form>
  )
}

export default Form
