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
        this.setState({ count });
    }
    render() {
        console.log("VotingItem :: render");
        let { value } = this.props
        let { count } = this.state
        return (
            <div className="voting-item">
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