

import React, { Component } from 'react';
import Card from './components/Card'

import Veg from './components/Veg'
import NonVeg from './components/NonVeg'

import A from './components/A'

import UserContext from './components/UserContext'
import BugComponent from './components/BugComponent';
import ErrorBoundary from './components/ErrorBoundary'
import ChannelList from './components/ChannelList';
import MessageList from './components/MessageList';

import NewChannelList from './components/NewChannelList';
import NewMessageList from './components/NewMessageList';


class App extends Component {

  state = {
    user: 'Nag',
    currentChannel: "channel-1"
  }

  setChannel(channel) {
    this.setState({ currentChannel: channel })
  }

  render() {
    let { currentChannel } = this.state
    return (
      <div className="container">
        <hr />
        <h1> react.js advanced concepts </h1>

        <hr />
        3.2. <h6>  slack with  Higher-Order-Components pattern  </h6>
        <hr />


        <div className="row">
          <div className="col-4">
            <NewChannelList currentChannel={currentChannel} onChange={channel => this.setChannel(channel)} />
          </div>
          <div className="col-8">
            <NewMessageList channel={this.state.currentChannel} />
          </div>
        </div>

        <hr />
        3.1. <h6>  slack without  Higher-Order-Components pattern  </h6>
        <hr />


        <div className="row">
          <div className="col-4">
            <ChannelList currentChannel={currentChannel} onChange={channel => this.setChannel(channel)} />
          </div>
          <div className="col-8">
            <MessageList channel={this.state.currentChannel} />
          </div>
        </div>



        <hr />
        3. <h6> Error Boundaries </h6>
        <hr />

        <ErrorBoundary>
          <BugComponent title="react" />
        </ErrorBoundary>


        <hr />
        2. <h6> component's context </h6>
        <hr />

        <UserContext.Provider value={this.state.user}>
          <A bgColor="#DEF" />
        </UserContext.Provider>


        <hr />
        1. <h6> container components </h6>
        <hr />

        <Card title="card">
          <Veg style={{ backgroundColor: "green" }} />
          <Veg style={{ backgroundColor: "yellow" }} />
        </Card>
        <hr />
        <Card title="card">
          <NonVeg style={{ backgroundColor: "red" }} />
          <NonVeg style={{ backgroundColor: "orange" }} />
        </Card>

      </div>
    );
  }
}

export default App;