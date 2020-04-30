import React, { Component } from 'react';
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import D from './D';

class C extends Component {
    render() {
        // let { bgColor } = this.props
        return (
            <ThemeContext.Consumer>
                {(theme) => {
                    return (
                        <UserContext.Consumer>
                            {user => {
                                return (
                                    <div style={{ backgroundColor: theme }} className="card card-body">
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
            </ThemeContext.Consumer>
        );
    }
}


export default C;