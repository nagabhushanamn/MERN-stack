import React, { Component } from 'react';
import BGColorContext from './BGColorContext'
import UserContext from './UserContext'
import D from './D';

class C extends Component {
    render() {
        // let { bgColor } = this.props
        return (
            <BGColorContext.Consumer>
                {({ bgColor }) => {
                    return (
                        <UserContext.Consumer>
                            {user => {
                                return (
                                    <div style={{ backgroundColor: bgColor }} className="card card-body">
                                        <span>C component</span>
                                        <span className="badge badge-danger">{user}</span>
                                        <br/>
                                        <D />
                                    </div>
                                )
                            }}
                        </UserContext.Consumer>
                    )
                }}
            </BGColorContext.Consumer>
        );
    }
}


export default C;