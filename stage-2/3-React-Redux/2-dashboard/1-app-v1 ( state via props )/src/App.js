import React, { useState } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom'
import LoginForm from './components/login-form/LoginForm'
import Dashboard from './components/dashboard/Dashboard'

function App({ history }) {

  const [userDet, setUserDet] = useState({})

  const doAuth = credentials => {

    // Fake Auth
    let { username, password } = credentials
    if (username === "admin" && password === "password") {

      let user_det = {
        name: "Nag",
        email: 'nagabhushanamn@gmail.com',
        address: 'universe'
      }
      setUserDet(user_det)

      history.push('dashboard')

    }
  }

  return (
    <div className="container">
      <hr />
      <h1> dashboard app </h1>
      <hr />
      <div className="row">
        <div className="col-4 col-offset-4">
          <Route exact path="/" render={props => <LoginForm {...props} onSubmit={credentials => doAuth(credentials)} />} />
        </div>
      </div>
      <Route path="/dashboard" component={props => <Dashboard userDet={userDet} />} />
    </div>
  );
}

export default withRouter(App);
