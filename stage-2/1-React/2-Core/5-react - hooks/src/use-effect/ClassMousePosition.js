

import React, { Component } from 'react';

class ClassMousePosition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
        this.changeMousePosition = this.changeMousePosition.bind(this)
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.changeMousePosition)
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.changeMousePosition)
    }
    changeMousePosition(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render() {
        return (
            <div className="card-panel">
                X : {this.state.x}, Y : {this.state.y}
            </div>
        );
    }
}

export default ClassMousePosition;