import React, { Component } from 'react';
import C from './C'

class B extends Component {
    render() {
        // let { bgColor } = this.props
        return (
            <div className="card card-body">
                <span>B component</span>
                {/* <C bgColor={bgColor} /> */}
                <C />
            </div>
        );
    }
}

export default B;