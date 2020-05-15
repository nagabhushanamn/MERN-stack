import React from 'react';

import styles from './TodoItem.module.css'
import { deleteTodo, completeTodo } from '../actions/todos'
import { useDispatch } from 'react-redux'

const TodoItem = ({ value: item }) => {
    const dispatch = useDispatch()
    const handleDelete = id => {
        dispatch(deleteTodo(id))
    }
    const handleComplete = (id) => {
        dispatch(completeTodo(id,!item.completed))
    }
    return (
        <div className="list-group-item" style={{backgroundColor:item.completed?"#DEF":'#FFF'}}>
            <div className={styles.item}>
                <input type="checkbox" checked={item.completed} onChange={e => handleComplete(item.id)} />
                <span>{item.title}</span>
                <button onClick={e => handleDelete(item.id)} className="btn btn-sm btn-danger">delete</button>
            </div>
        </div>
    );
};

export default TodoItem;