import React, { useState } from 'react';
import './TodoList.css';
import Todo from './Todo';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todoSlice';
import { AnimatePresence } from 'framer-motion';

export default function TodoList() {
    const todos = useSelector(selectTodos);
    const [filter, setFilter] = useState('All Todos')
    const [isActive, setIsActive] = useState('All Todos')
    
    const FILTER_MAP = {
        "All Todos": () => true,
        "Done": item => item.completed,
        "Not Done": item => !item.completed
    }

    const FILTER_NAMES = Object.keys(FILTER_MAP);

    return (
        <div>
            <div className='filter__section'>
                {FILTER_NAMES.map((name) => (
                    <div 
                        className='filter__todos' 
                        key={name} 
                        onClick={() => setIsActive(name)}>
                            <button 
                                key={name}
                                className={`filter__buttons ${isActive === name && 'active__filter'}`} 
                                onClick={() => setFilter(name)}
                            >
                                {name}
                            </button>
                    </div>
                ))
                }             
            </div>
            <ul className='todo__list'>
                <AnimatePresence>
                    {todos.filter(FILTER_MAP[filter])
                        .map((todo) => (
                            <Todo 
                                key={todo.id}
                                id={todo.id}
                                description={todo.description}
                                completed={todo.completed}
                            />
                        ))
                    }
                </AnimatePresence>
            </ul>
        </div>
    )
}
