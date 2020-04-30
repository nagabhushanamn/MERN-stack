import React, { Component } from 'react';
import B from './B'
import ThemeContext from './ThemeContext'

class A extends Component {
    render() {
        // let { bgColor } = this.props
        return (
            <ThemeContext.Consumer>
                {theme => {
                    return (
                        <div style={{ backgroundColor: theme }} className="card card-body">
                            <span>A component</span>
                            <B />
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default A;