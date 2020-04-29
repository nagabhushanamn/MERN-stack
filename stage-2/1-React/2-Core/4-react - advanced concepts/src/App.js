

import React, { Component } from 'react';

import Card from './container/Card'
import Veg from './container/Veg'
import NonVeg from './container/NonVeg'

import A from './context/A'

import UserContext from './context/UserContext'

import BugComponent from './error-boundary/BugComponent';
import ErrorBoundary from './error-boundary/ErrorBoundary'

import ChannelList from './hoc/ChannelList';
import MessageList from './hoc/MessageList';

import NewChannelList from './hoc/NewChannelList';
import NewMessageList from './hoc/NewMessageList';


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
        3. <h6> Error Boundaries  ( works only with production build) </h6>
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
          <Veg style={{ backgroundColor: "#FFF" }} />
          <Veg style={{ backgroundColor: "#FFF" }} />
        </Card>
        <hr />
        <Card title="card">
          <NonVeg style={{ backgroundColor: "#FFF" }} />
          <NonVeg style={{ backgroundColor: "#FFF" }} />
        </Card>

      </div>
    );
  }
}

export default App;