import React, { Component } from 'react';
import B from './B'
import BGColorContext from './BGColorContext'

class A extends Component {
    render() {
        let { bgColor } = this.props
        return (
            <div style={{ backgroundColor: bgColor }} className="card card-body">
                <span>A component</span>
                {/* <B bgColor={bgColor} /> */}
                <BGColorContext.Provider value={{ bgColor }}>
                    <B />
                </BGColorContext.Provider>
              
            </div>
        );
    }
}

export default A;