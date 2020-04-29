import React, { Component } from 'react';

import { connect } from '../hoc'

class NewChannelList extends Component {

    renderTopics() {
        let { channels } = this.props
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

// export default NewChannelList;
const mapStateToProps = state => {
    return {
        channels: state.channels
    }
}
export default connect(NewChannelList,mapStateToProps)