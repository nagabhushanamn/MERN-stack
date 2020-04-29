import React, { Component } from 'react';
import ColorContext from './ColorContext'
import UserContext from './UserContext'
import D from './D';

class C extends Component {
    render() {
        // let { bgColor } = this.props
        return (
            <ColorContext.Consumer>
                {({ bgColor }) => {
                    return (
                        <UserContext.Consumer>
                            {user => {
                                return (
                                    <div style={{ backgroundColor: bgColor }} className="card card-body">
                                        <span>C component</span>
                                        <span>{user}</span>
                                        <br />
                                        <D />
                                    </div>
                                )
                            }}
                        </UserContext.Consumer>
                    )
                }}
            </ColorContext.Consumer>
        );
    }
}


export default C;