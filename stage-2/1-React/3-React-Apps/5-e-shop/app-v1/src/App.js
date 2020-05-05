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
import CartView from './components/cart-view/CartView';

function App() {

  const [cart, setCart] = useState({
    1: {
      item: {
        id: 1,
        name: 'Laptop',
        price: 149000,
        currency: 'INR',
        canBuy: true,
        description: 'Mac pro',
        image: 'images/laptop.png'
      }, qty: 1
    }
  })

  const addToCart = (item, qty = 1) => {

    let { id } = item;
    let itemLine = cart[id]
    if (!itemLine) {
      itemLine = { item, qty: 1 }
    } else {
      itemLine = { item, qty: itemLine.qty + qty }
    }

    if (itemLine.qty === 0) {
      delete cart[item.id]
      setCart({ ...cart })
    } else {
      setCart({ ...cart, [id]: itemLine })
    }
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
            <Route path="/items" render={props => <ItemList {...props} cart={cart} onBuy={item => addToCart(item)} />} />
            <Route path="/cart" render={props => <CartView {...props} value={cart} onBuy={(item, qty) => addToCart(item, qty)} />} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
