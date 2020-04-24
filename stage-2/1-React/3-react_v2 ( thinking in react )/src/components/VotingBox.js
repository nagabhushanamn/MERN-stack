
import React, { Component } from 'react';
import VotingItem from './VotingItem'

class VotingBox extends Component {

    constructor(props) {
        super(props);
        console.log("VotingBox :: constructor");
        this.state = {
            items: [],
            totalCount: 0
        }

        //------------------------------------------------
        let idx = 0;
        let iterval = setInterval(() => {
            idx += 1
            if (idx === 5)
                clearInterval(iterval)
            let item = `item-${idx}`
            let { items } = this.state
            items = items.concat(item)
            this.setState({ items: items }) // re-render & diffing
        }, 0)
        //------------------------------------------------

    }
    incrementTotalCount(event) {
        let { value } = event
        let { totalCount } = this.state
        totalCount += value
        this.setState({ totalCount })
    }
    renderVotingItems(items) {
        return items.map((item => {
            return <VotingItem key={item}
                value={item}
                onVote={event => this.incrementTotalCount(event)} />;
        }))
    }
    render() {
        console.log("VotingBox :: render");
        let { title } = this.props
        let { items, totalCount } = this.state
        let className = `card ${totalCount < 0 ? 'bg-warning' : ''}`
        return (
            <div>
                <div className={className}>
                    <div className="card-header">{title} - VotingBox  : <span className="badge badge-danger">{totalCount}</span></div>
                    <div className="card-body">
                        {/* 
                    <VotingItem value={items[0]} />
                    <VotingItem value={items[1]} />
                    <VotingItem value={items[2]} />
                    <VotingItem value={items[3]} />
                    <VotingItem value={items[4]} />
                    <VotingItem value={items[5]} /> 
                    */
                        }
                        {
                            this.renderVotingItems(items)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

VotingBox.defaultProps = {
    title: 'VotingBox'
}

export default VotingBox;