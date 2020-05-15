

import React, { useState } from 'react';
import { addTodo } from '../actions/todos'
import { useDispatch } from 'react-redux'
const TodoInput = () => {
    let [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const handleKeyUp = e => {
        if (e.which === 13) {
            dispatch(addTodo(title))
            e.target.value = ""
        }

    }
    return (
        <div className="alert alert-info">
            <input value={title} onKeyUp={e => handleKeyUp(e)} onChange={e => setTitle(e.target.value)} className="form-control" />
        </div>
    );
};

export default TodoInput;