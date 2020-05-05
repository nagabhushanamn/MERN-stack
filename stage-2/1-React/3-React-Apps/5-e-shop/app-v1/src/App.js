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
import CartBadge from './components/cart-badge/CartBadge';

function App() {

  const [cart, setCart] = useState({})

  /**
   * 
   * 
   *  {
   *   'itemId':{item,qty}
   *  }
   *  
   *  e.g
   * 
   *  {
   *   '1': {item,qty:2},
   *   '2': {item,qty:10}
   *  } 
   * 
   */

  const addToCart = item => {

    let { id } = item;
    let itemLine = cart[id]
    if (!itemLine) {
      itemLine = { item, qty: 1 }
    } else {
      itemLine = { item, qty: itemLine.qty + 1 }
    }
    setCart({ ...cart, [id]: itemLine })
  }

  return (
    <div className="container">

      <Router>
        <Navbar title="e-shop" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/items" render={props => <ItemList {...props} onBuy={item => addToCart(item)} />} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
