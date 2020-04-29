import React, { Component } from 'react';

class VotingTable extends Component {
    renderVoteSummary(summary) {
        return summary.map(line => {
            return (
                <tr key={line.item}>
                    <td>{line.item}</td>
                    <td>{line.count}</td>
                </tr>
            )
        })
    }
    render() {
        let { value: summary } = this.props
        return (
            <div className="card card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderVoteSummary(summary)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VotingTable;