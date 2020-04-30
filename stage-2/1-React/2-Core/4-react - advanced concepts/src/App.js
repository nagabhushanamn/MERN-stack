

import React, { Component } from 'react';

import Card from './container/Card'
import Veg from './container/Veg'
import NonVeg from './container/NonVeg'

import A from './context/A'

import UserContext from './context/UserContext'
import ThemeContext from './context/ThemeContext'
import D from './context/D'

import BugComponent from './error-boundary/BugComponent';
import ErrorBoundary from './error-boundary/ErrorBoundary'

import ChannelList from './hoc/ChannelList';
import MessageList from './hoc/MessageList';

import NewChannelList from './hoc/NewChannelList';
import NewMessageList from './hoc/NewMessageList';
import Comp1 from './hoc/Comp1';
import Comp2 from './hoc/Comp2';
import Form from './refs/Form';
import Greet from './function-synax/Greet';
import VotingBox from './hooks/VotingBox';


class App extends Component {

  state = {
    user: 'Nag',
    theme: '#DEF',
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
        6. <h6> Hooks </h6>
        <hr />


        <VotingBox />


        <hr />
        5. <h6>  class vs function syntax for react components </h6>
        <hr />

        <Greet message="Advance May-1 wishes" />


        <hr />
        4. <h6>  refs  </h6>
        <hr />

        <Form />


        <hr />
        3.2. <h6>  HOC - example  </h6>
        <hr />


        <Comp1 />
        <br />
        <Comp2 />

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
          <BugComponent title={"react"} />
        </ErrorBoundary>


        <hr />
        2. <h6> component's context </h6>
        <hr />

        <ThemeContext.Provider value={this.state.theme}>
          <UserContext.Provider value={this.state.user}>
            <A />
          </UserContext.Provider>
        </ThemeContext.Provider>
        <hr />
        <ThemeContext.Provider value={"#DFF"}>
          <UserContext.Provider value={this.state.user}>
            <A />
          </UserContext.Provider>
        </ThemeContext.Provider>
        <hr />
        <D />


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