
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          title: 'javascript',
          price: 100,
          description: 'best language for full-stack',
          isAvailable: true
        },
        {
          id: 2,
          title: 'react.js',
          price: 200,
          description: 'best library to make UI components',
          isAvailable: true
        }
      ]
    }
  }
  renderLearnButton(course) {
    let { isAvailable } = course
    if (isAvailable) {
      return (<button className="btn btn-sm btn-dark">Learn</button>)
    }
    else {
      return null
    }
  }
  renderCourses() {
    let { courses } = this.state
    let elements = courses.map(course => {
      return (
        <div className="list-group-item" key={course.id}>
          <h5>{course.title}</h5>
          <h6>&#8377;{course.price}</h6>
          <div>{course.description}</div>
          {/* {course.isAvailable ? <button className="btn btn-sm btn-dark">Learn</button> : null} */}
          {this.renderLearnButton(course)}
        </div>
      )
    })
    return elements
  }
  render() {
    let { courses } = this.state
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <span className="navbar-brand mb-0 h1">course dashboard</span>
        </nav>
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