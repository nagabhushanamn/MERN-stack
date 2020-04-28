
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Item from './components/Item'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  addToCart(course) {
    let { cart } = this.state
    cart = cart.concat(course)
    this.setState({ cart })
  }

  renderCourses() {
    let { courses, currentTab } = this.state
    let elements = courses.map(course => {
      return (
        <div key={course.id}>
          <Item value={course} onBuy={event => this.addToCart(event.item)} />
          {/* <input value="Nag" onchange="func(event)"/> */}
        </div >
      )
    })
    return elements
  }
  render() {
    let { cart } = this.state
    let count = cart.length
    return (
      <div>
        <Navbar title="course dashboard" />
        <hr />
        <div className="container">
          <i className="fa fa-shopping-cart"></i>&nbsp;
        <span className="badge badge-danger">{count}</span> item(s) in cart
        </div>
        <hr />
        <div className="container">
          {this.renderCourses()}
        </div>
      </div>
    );
  }
}

export default App;