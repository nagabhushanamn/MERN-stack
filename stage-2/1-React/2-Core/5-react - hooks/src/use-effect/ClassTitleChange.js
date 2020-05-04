import React, { Component } from 'react';

class ClassTitleChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: 'dude'
        }
    }
    componentDidMount() {
        let { count } = this.state
        document.title = `count - ${count}`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            let { count } = this.state
            document.title = `count - ${count}`
        }
    }
    increment() {
        let { count } = this.state
        this.setState({ count: count + 1 })
    }
    render() {
        let { count } = this.state
        return (
            <div className="card-panel">
                <button className="btn" onClick={e => this.increment()}>
                    do count - {count}
                </button>
            </div>
        );
    }
}

export default ClassTitleChange;