const React = require('react')
const Layout = require('./Layout')
const TodoList = require('./TodoList')
const NewTodo = require('./NewTodo')

const index = (props) => {
    return (
        <Layout title={props.title}>
            <hr />
            <NewTodo />
            <hr />
            <TodoList todos={props.todos} />
        </Layout>
    );
};

module.exports = index