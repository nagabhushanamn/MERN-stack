import React, { Component } from 'react';

class ClassAutoCount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    tick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div className="card-panel">
                count : {this.state.count}
            </div>
        );
    }
}

export default ClassAutoCount;