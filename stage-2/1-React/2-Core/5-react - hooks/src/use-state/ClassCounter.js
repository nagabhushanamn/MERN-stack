import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
        let { count } = this.state
        this.setState({ count: count + 1 })
    }
    render() {
        let { count } = this.state
        return (
            <div>
                <div className="card-panel blue-grey darken-10">
                    <button onClick={this.increment} className="btn">Hit - {count}</button>
                </div>
            </div>
        );
    }
}

export default ClassCounter;