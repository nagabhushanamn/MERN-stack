var React = require('react');
var Layout = require('./Layout');
var TodoList = require('./TodoList');

const index = (props) => {
    let {title,todos} = props
    return (
        <div>
            <Layout title={title}>
                <TodoList todos={todos} />
            </Layout>
        </div>
    );
};

module.exports = index;