import React, { useState, useReducer } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom'
import LoginForm from './components/login-form/LoginForm'
import Dashboard from './components/dashboard/Dashboard'

import UserDetContext from './context/UserDetContext'



const initialState = {}

const userReducer = (state, action) => {
  let { type } = action
  switch (type) {
    case 'LOGIN': {
      let { userDet } = action
      return userDet
    }
  }
}


function App() {

  // const [userDet, setUserDet] = useState({})
  const [userDet, dispatch] = useReducer(userReducer, initialState)

  return (
    <div className="container">
      <hr />
      <h1> dashboard app </h1>
      <hr />
      <UserDetContext.Provider value={{ userDet, dispatch }}>
        <div className="row">
          <div className="col-4 col-offset-4">
            <Route exact path="/" render={props => <LoginForm {...props} />} />
          </div>
        </div>
        <Route path="/dashboard" component={Dashboard} />
      </UserDetContext.Provider>

    </div>
  );
}

export default App;
