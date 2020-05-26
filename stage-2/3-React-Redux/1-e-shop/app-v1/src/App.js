import React, { useEffect } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

import { loadUser } from './actions/user'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ItemList from './components/item-list/ItemList';
import CartView from './components/cart-view/CartView';
import LoginForm from './components/login-form/LoginForm';

import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <div className="container">
      <Router>
        <Navbar title="e-shop" />
        <hr />
        <hr />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/items" render={props => <ItemList {...props} />} />
            <Route path="/cart" render={props => <CartView {...props} />} />
            <Route path="/login" render={props => <LoginForm {...props} />} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
