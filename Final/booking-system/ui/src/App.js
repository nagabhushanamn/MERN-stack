import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <hr />
      <h1>booking system</h1>
      <hr />
      <Router>
        <Route path="/home" render={props => <Home {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
      </Router>
    </div>
  );
}

export default App;
