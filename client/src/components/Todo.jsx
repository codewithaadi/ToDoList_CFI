import React from 'react'

export default function Todo(props) {
  return (
    <li className='task' onClick={()=> toggleTodo()}>
        <span>{props.todo.data}</span>
        <span className='icon'>
            <i className='fas fa-trash' />
        </span>
        <span className='icon'>
            <i className='fas fa-pen' />
        </span>
    </li>
  )
}
