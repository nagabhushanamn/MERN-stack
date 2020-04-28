import React, { Component } from 'react';

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, Interns!</h1>
                    <hr className="my-4" />
                    <a href="/" className="btn btn-primary btn-lg" role="button">Learn MERN stack</a>
                </div>
            </div>
        );
    }
}

export default Home;