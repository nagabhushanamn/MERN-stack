

const React = require('react')

const NewTodo = () => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="alert alert-info">
                    <form action="todos" method="post">
                        <input type="text" name="title" className="form-control" />
                        <br/>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

module.exports = NewTodo