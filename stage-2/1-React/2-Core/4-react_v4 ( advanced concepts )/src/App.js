

import React, { Component } from 'react';
import Card from './components/Card'

import Veg from './components/Veg'
import NonVeg from './components/NonVeg'

import A from './components/A'

import UserContext from './components/UserContext'
import BugComponent from './components/BugComponent';
import ErrorBoundary from './components/ErrorBoundary'


class App extends Component {

  state = {
    user: 'Nag'
  }

  render() {

    return (
      <div className="container">
        <hr />
        <h1> react.js advanced concepts </h1>

        <hr />
        3. <h6>  Higher-Order-Components </h6>
        <hr />

        <hr />
        3. <h6> Error Boundaries </h6>
        <hr />


        <ErrorBoundary>
          <BugComponent title="im hungry" />
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