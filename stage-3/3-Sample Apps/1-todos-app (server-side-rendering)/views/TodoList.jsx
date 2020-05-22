const React = require('react')

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => {
                return (
                    <div className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input type="checkbox" />
                        <span>{todo.title}</span>
                        <a className="btn btn-danger" href={`todos?action=delete&id=` + todo.id}>delete</a>
                    </div>
                )
            })}
        </div>
    );
};

module.exports = TodoList