
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import CourseList from './components/CourseList'
import CartBadge from './components/CartBadge'
import CartView from './components/CartView'
import Home from './components/Home'
import NotFound from './components/NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    }
  }

  addToCart(event) {
    let { item: course } = event
    let { cart } = this.state
    // if (!cart.includes(course)) {
    cart = cart.concat(course)
    this.setState({ cart })
    // }
  }

  deleteCartLine(event) {
    let { id } = event
    let { cart } = this.state
    cart = cart.filter(line => line.id !== id)
    this.setState({ cart })
  }

  renderCart() {
    let { cart } = this.state
    return <CartView value={cart} onDelete={e => this.deleteCartLine(e)} />
  }

  render() {
    let { cart } = this.state
    let count = cart.length
    return (
      <Router>
        <div>
          <Navbar title="course dashboard" />
          <hr />
          <div className="container">
            <CartBadge value={count} />
          </div>
          <hr />
          <div className="container">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/courses">courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">cart</Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className="container">
            <Switch>
              {/* <Route exact path="/" render={props => <Home {...props}/>} /> */}
              <Route exact path="/" component={Home} /> />
              <Route exact path="/courses" render={props => <CourseList {...props} cart={cart} onBuy={e => this.addToCart(e)} />} />
              <Route path="/cart" render={props => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div >
      </Router>
    );
  }
}

export default App;