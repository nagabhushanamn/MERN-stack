import React, { Component } from 'react';

import './VotingItem.css'

class VotingItem extends Component {
    constructor(props) {
        super(props);
        console.log("VotingItem :: constructor");
    }
    render() {
        console.log("VotingItem :: render");
        let { value } = this.props
        return (
            <div className="voting-item">
                <button className="btn btn-primary">
                    {value}
                </button>
                <hr />
                <span className="badge badge-danger">0</span>
            </div>
        );
    }
}

VotingItem.defaultProps = {
    value: 'Item'
}

export default VotingItem;