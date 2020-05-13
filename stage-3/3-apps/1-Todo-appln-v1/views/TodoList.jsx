var React = require('react');

const TodoList = (props) => {
    let { todos } = props;
    const renderTodos = () => {
        return todos.map((item, idx) => {
            return (
                <div className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input type="checkbox" />
                    <span>{item.title}</span>
                    <button className="btn btn-danger">delete</button>
                </div>
            )
        })
    }
    return (
        <div>
            {renderTodos()}
        </div>
    );
};

module.exports = TodoList