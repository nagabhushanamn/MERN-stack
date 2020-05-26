
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Item from './components/Item'
import CartBadge from './components/CartBadge'
import CartView from './components/CartView'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      cart: [],
      courses: [
        {
          id: 1,
          title: 'javascript',
          price: 100,
          overview: 'best language for full-stack',
          isAvailable: true,
          log: 'images/javascript.png'
        },
        {
          id: 2,
          title: 'react.js',
          price: 200,
          overview: 'best library to make UI components',
          isAvailable: true,
          log: 'images/react.png'
        },
      ]
    }
  }

  toggleCart() {
    let { isCartOpen } = this.state
    this.setState({ isCartOpen: !isCartOpen })
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

  renderCourses() {
    let { cart, courses, isCartOpen } = this.state
    if (!isCartOpen) {
      let elements = courses.map(course => {
        let isOwned = cart.includes(course)
        return (
          <div key={course.id}>
            <Item value={course} isOwned={isOwned} onBuy={e=>{this.addToCart(e)}} />
            {/* <input value="Nag" onchange="func(event)"/> */}
          </div >
        )
      })
      return elements
    }
  }

  renderCart() {
    let { isCartOpen, cart } = this.state
    if (isCartOpen)
      return <CartView value={cart} onDelete={e => this.deleteCartLine(e)} />
  }

  render() {
    let { cart, isCartOpen } = this.state
    let count = cart.length
    return (
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
              <a
                className="nav-link" href="#"
                onClick={e => this.toggleCart()}>
                {isCartOpen ? 'view courses' : 'view cart'}
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          {this.renderCourses()}
          {this.renderCart()}
        </div>
      </div >
    );
  }
}

export default App;