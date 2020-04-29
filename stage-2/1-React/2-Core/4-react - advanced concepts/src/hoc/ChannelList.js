import React, { Component } from 'react';
import store from '../store'

class ChannelList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channels: store.getState().channels
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            const channels = store.getState().channels;
            this.setState(channels)
        })
    } 
    componentWillUnmount() {
        this.unsubscribe()
    }
    renderTopics() {
        let { channels } = this.state
        let { onChange, currentChannel } = this.props
        return channels.map((channel, idx) => {
            return (
                <li onClick={e => onChange(channel)}
                    style={{ cursor: 'pointer', backgroundColor: currentChannel === channel ? '#DEF' : '#FFF' }} className="list-group-item" key={idx}>
                    {channel}
                </li>
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">ChannelList</div>
                <div className="card-body">
                    <ul>
                        {this.renderTopics()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChannelList;