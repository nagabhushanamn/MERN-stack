import React, { Component } from 'react';
import B from './B'
import ColorContext from './ColorContext'

class A extends Component {
    render() {
        let { bgColor } = this.props
        return (
            <div style={{ backgroundColor: bgColor }} className="card card-body">
                <span>A component</span>
                {/* <B bgColor={bgColor} /> */}
                <ColorContext.Provider value={{ bgColor }}>
                    <B />
                </ColorContext.Provider>
              
            </div>
        );
    }
}

export default A;