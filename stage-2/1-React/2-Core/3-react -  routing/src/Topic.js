import React, { Component } from 'react';

class Topic extends Component {
    render() {
        let { params } = this.props.match
        let { course } = params
        return (
            <div className="card card-body">
                Topic : {course}
            </div>
        );
    }
}

export default Topic;