import React, { useState, useRef, useCallback } from 'react';
import Item from './Item';

const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const todoField = useRef(null)

    const addNewTodo = e => {
        if (e.which === 13) {
            let title = e.target.value
            setTodos(todos.concat({ id: todos.length + 1, title }))
            todoField.current.value = ''
        }
    }

    const editTodo = useCallback((id, title) => {
        //...
    }, [])

    return (
        <div className="card-panel">
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="New Todo"
                        ref={todoField}
                        onKeyUp={e => addNewTodo(e)} />
                </div>
            </div>
            <div>
                <ul className="collection">
                    {
                        todos.map(item => {
                            return <Item onEdit={editTodo} key={item.id} value={item.title} />
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;