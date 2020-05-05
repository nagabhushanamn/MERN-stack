import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ItemList from './components/item-list/ItemList';

function App() {
  return (
    <div className="container">

      <Router>
        <Navbar title="e-shop" />
        <hr />
        <hr />
        <div>
          <Switch>
            <Route path="/items" component={ItemList} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
