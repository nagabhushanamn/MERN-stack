import React, { Component } from 'react';

class Topic extends Component {
    render() {
        let { params } = this.props.match
        let { course } = params
        return (
            <div className="card">
                <div className="card-header">Topic : {course}</div>
                <div className="card-body"></div>
            </div>
        );
    }
}

export default Topic;