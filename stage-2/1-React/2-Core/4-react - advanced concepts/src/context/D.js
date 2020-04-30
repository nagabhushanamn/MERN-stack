
import React, { Component } from 'react';
import ThemeContext from './ThemeContext'

class D extends Component {
    render() {
        let context = this.context
        let theme = "#FFF"
        if (context)
            (theme = context)
        return (
            <div style={{ backgroundColor: theme }} className="card card-body">
                <span>D component</span>
            </div>
        )
    }
}

D.contextType = ThemeContext

export default D;