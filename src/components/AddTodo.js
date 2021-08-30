import React, { useState } from 'react';
import './AddTodo.css';
import { useDispatch } from 'react-redux';
import { submitTodo } from '../store/todoSlice';

export default function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(submitTodo({
            desc: todo
        }))
        setTodo('');
    }

    return (
        <div className='add__todo'>
            <form className='todo__form' onSubmit={submit}>
                <input
                    type='text'
                    className='todo__input'
                    placeholder='Add a new todo...'
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className='todo__btn'>Add Todo</button>
            </form>
        </div>
    )
}
