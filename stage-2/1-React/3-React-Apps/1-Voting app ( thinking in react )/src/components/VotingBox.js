
import React, { Component } from 'react';
import VotingItem from './VotingItem'
import VotingTable from './VotingTable';

class VotingBox extends Component {

    constructor(props) {
        super(props);
        console.log("VotingBox :: constructor");
        this.state = {
            items: [],
            totalCount: 0,
            totalSummary: []
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

        let { item, count, value } = event

        let { totalCount, totalSummary } = this.state
        totalCount += value

        let idx = totalSummary.findIndex(line => line.item === item)
        let line
        if (idx !== -1) {
            line = totalSummary.splice(idx, 1)[0]
            line = { item: line.item, count }
        } else {
            line = { item, count }
        }
        totalSummary = totalSummary.concat(line)
        this.setState({ totalCount, totalSummary })
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
        let { items, totalCount, totalSummary } = this.state
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

                        <div className="clearfix"></div>
                        <hr />

                        <VotingTable value={totalSummary} />

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