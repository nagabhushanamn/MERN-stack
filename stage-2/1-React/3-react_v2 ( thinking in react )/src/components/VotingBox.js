
import React, { Component } from 'react';
import VotingItem from './VotingItem'

class VotingBox extends Component {
    constructor(props) {
        super(props);
        console.log("VotingBox :: constructor");
    }
    render() {
        console.log("VotingBox :: render");
        let { title } = this.props
        return (
            <div className="card">
                <div className="card-header">{title} &madsh; VotingBox</div>
                <div className="card-body">
                    <VotingItem value="Mongo.db" />
                    <VotingItem value="Express.js" />
                    <VotingItem value="React.js" />
                    <VotingItem value="Node.js" />
                </div>
            </div>
        );
    }
}

VotingBox.defaultProps = {
    title: 'VotingBox'
}

export default VotingBox;