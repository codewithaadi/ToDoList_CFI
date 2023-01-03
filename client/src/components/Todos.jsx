import { useEffect } from 'react';
import { getAllTodos } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Todos() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos());
    },[])
  return (
    <div>Todos</div>
  )
}
