import React, { Component } from 'react';
import { connect } from '../hoc'

class NewMessageList extends Component {
    renderMessages() {
        let { messages } = this.props
        return messages.map((message, idx) => {
            return (
                <div key={idx} className="alert alert-info">
                    {message}
                </div>
            )
        })
    }
    render() {
        let { channel } = this.props
        return (
            <div className="card">
                <div className="card-header">MessageList : {channel}</div>
                <div className="card-body">
                    {this.renderMessages()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    let { channel } = props;
    return {
        messages: state.messages[channel] || []
    }
}
export default connect(NewMessageList, mapStateToProps);