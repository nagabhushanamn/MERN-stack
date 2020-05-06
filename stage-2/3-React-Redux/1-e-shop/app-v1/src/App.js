import React, { useState } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ItemList from './components/item-list/ItemList';
import CartView from './components/cart-view/CartView';

function App() {

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
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
