
import React, { Component } from 'react';
import ColorContext from './ColorContext'

class D extends Component {
    render() {
        let context = this.context
        let bgColor = "#FFF"
        if (context)
            ({ bgColor } = context)
        return (
            <div style={{ backgroundColor: bgColor }} className="card card-body">
                <span>D component</span>
            </div>
        )
    }
}

D.contextType = ColorContext

export default D;