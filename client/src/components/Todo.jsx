import { useState } from 'react'
import { toggleTodo,updateTodo } from '../redux/actions';
import { useDispatch } from "react-redux";

export default function Todo(props) {
  const [editing, setEditing] = useState(false);
  const [text,setText] = useState(props.todo.data);

  const dispatch = useDispatch();
  const onFormSubmit = (e)=>{
    e.preventDefault();
    setEditing(prevState => !prevState);
    dispatch(updateTodo(props.todo._id, text));
  }

  return (
    <li className='task' onClick={() => dispatch(toggleTodo(props.todo._id))} style={{
      textDecoration: props.todo.done ? 'line-through' : '',
      color: props.todo.done ? '#bdc3c7' : '#34495e'
    }}>
      <span style={{ display: editing ? 'none' : '' }}>{props.todo.data}</span>

      <form  style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e)=> setText(e.target.value)}
        />
      </form>

      <span className='icon'>
        <i className='fas fa-trash' />
      </span>
      <span className='icon'>
        <i className='fas fa-pen' onClick={() => setEditing(prevState => !prevState)} />
      </span>
    </li>
  )
}
