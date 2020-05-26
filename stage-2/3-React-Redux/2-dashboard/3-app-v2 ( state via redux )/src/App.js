import React, { useState, useReducer } from 'react';
import './App.css';

import { Route } from 'react-router-dom'
import LoginForm from './components/login-form/LoginForm'
import Dashboard from './components/dashboard/Dashboard'


function App() {

  return (
    <div className="container">
      <hr />
      <h1> dashboard app </h1>
      <hr />
      <div className="row">
        <div className="col-4 col-offset-4">
          <Route exact path="/" component={LoginForm} />
        </div>
      </div>
      <Route path="/dashboard" component={Dashboard} />

    </div>
  );
}

export default App;
