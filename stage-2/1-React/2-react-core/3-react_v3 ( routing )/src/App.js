import React, { Component } from 'react';
import './App.css';
import Home from './Home.js'
import Topics from './Topics.js'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container" >
          <hr />
          <h1> SPA with react-router</h1>
          <hr />
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
