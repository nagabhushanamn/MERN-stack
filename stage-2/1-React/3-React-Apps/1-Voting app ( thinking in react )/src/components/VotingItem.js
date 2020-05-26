import React, { Component } from 'react';

import './VotingItem.css'

class VotingItem extends Component {
    constructor(props) {
        super(props);
        console.log("VotingItem :: constructor");
        this.state = {
            count: 0,
        }
    }
    doCount(e, n) {
        let { count } = this.state
        count += n
        // if (count >= 0) {
        this.setState({ count });
        let { onVote, value: item } = this.props
        if (onVote) {
            let event = { item, count, value: n }
            onVote(event)
        }
        // }

    }
    render() {
        console.log("VotingItem :: render");
        let { value } = this.props
        let { count } = this.state
        let className = `voting-item ${count < 0 ? 'bg-warning' : ''}`
        return (
            <div className={className}>
                <button className="btn btn-primary">
                    {value}
                </button>
                <hr />
                <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around' }}>
                    <span className="badge" onClick={e => this.doCount(e, 1)}>
                        <i className="fa fa-plus"></i>
                    </span>
                    <span className="badge" onClick={e => this.doCount(e, -1)}>
                        <i className="fa fa-minus"></i>
                    </span>
                </div>
                <hr />
                <span className="badge badge-danger">{count}</span>
            </div>
        );
    }
}

VotingItem.defaultProps = {
    value: 'Item'
}

export default VotingItem;