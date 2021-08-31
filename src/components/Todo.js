import React from 'react';
import './Todo.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { checkTodo, deleteTodo } from '../store/todoSlice';
import { motion } from 'framer-motion';

export default function Todo({ id, description, completed }) {
    const dispatch = useDispatch();

    const markAsComplete = () => {
        dispatch(checkTodo({
            id: id, completed: !completed 
        }))
    }

    const removeTodo = () => {
        dispatch(deleteTodo({
            id: id
        }))
    }

    return (
        <motion.li 
            className={'todo__container'}
            initial={{ x: "20px", transition: { duration: 0.5 }, overflowX: 'hidden'}}
            animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
            exit={{ x: '-60vw', scale: [1,0], transition: { duration: 0.7 }}}
            style={{maxWidth: '630px'}}
        >
            <div className={`todo__element ${completed && 'todo__complete'}`}>
                <div className='todo__left'>
                    <input 
                        type='checkbox'
                        className='todo__checkbox'
                        checked={completed}
                        onChange={markAsComplete}
                    />
                    <span className='todo__desc'>
                        {description}
                    </span>
                </div>
                <div className='todo__right'>
                    <DeleteIcon 
                        className='todo__delete'
                        style={{fill: 'rgba(122, 112, 121, 1)', cursor: 'pointer'}}
                        onClick={removeTodo}
                    />
                </div>
            </div>
        </motion.li>
    )
}
