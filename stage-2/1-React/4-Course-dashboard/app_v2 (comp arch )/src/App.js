
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Item from './components/Item'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  renderCourses() {
    let { courses, currentTab } = this.state
    let elements = courses.map(course => {
      return (
        <div key={course.id}>
          <Item value={course} />
        </div >
      )
    })
    return elements
  }
  render() {
    return (
      <div>

        <Navbar title="course dashboard" />

        <hr />
        <hr />

        <div className="container">
          {this.renderCourses()}
        </div>

      </div>
    );
  }
}

export default App;