import React from 'react'
import './styleToDo.css'
import Task from './Task'

function ToDo() {
  return (
    <div className='toDo_container'>
      <h2 className='toTo_title'>Zadania</h2>
      <div className='tasks'>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
    </div>
  )
}

export default ToDo