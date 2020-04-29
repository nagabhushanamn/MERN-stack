import React, { Component } from 'react';
import store from '../store'

class MessageList extends Component {
    constructor(props) {
        super(props)
        let { channel } = props
        if (channel) {
            this.state = {
                messages: store.getState().messages[channel] || []
            }
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let { channel } = this.props
            const messages = store.getState().messages[channel] || [];
            this.setState({ messages })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    componentDidUpdate(prevProps) {
        let { channel: currentChannel } = this.props
        let { channel: prevChannel } = prevProps
        if (currentChannel !== prevChannel) {
            const messages = store.getState().messages[currentChannel] || [];
            this.setState({ messages })
        }
    }
    renderMessages() {
        let { messages } = this.state
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

export default MessageList;