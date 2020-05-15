import React from 'react';

import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {

    const todos = useSelector(state => state.todos) // subscription 

    const renderTodos = () => {
        return todos.map((item, idx) => {
            return (
                <TodoItem key={idx} value={item} />
            )
        })
    }
    return (
        <div className="list-group">
            {renderTodos()}
        </div>
    );
};

export default TodoList;