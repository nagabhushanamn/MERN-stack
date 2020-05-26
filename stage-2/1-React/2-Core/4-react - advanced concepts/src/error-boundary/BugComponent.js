

import React, { Component } from 'react';

class BugComponent extends Component {
    render() {
        let { title } = this.props
        return (
            <div className="card card-body">
                {title.toUpperCase()}
            </div>
        );
    }
}

export default BugComponent;