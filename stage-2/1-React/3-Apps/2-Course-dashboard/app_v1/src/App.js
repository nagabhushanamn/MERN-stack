
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      courses: [
        {
          id: 1,
          title: 'javascript',
          price: 100,
          description: 'best language for full-stack',
          isAvailable: true,
          log: 'images/javascript.png'
        },
        {
          id: 2,
          title: 'react.js',
          price: 200,
          description: 'best library to make UI components',
          isAvailable: true,
          log: 'images/react.png'
        }
      ]
    }
  }
  changeTab(tabIndex) {
    this.setState({ currentTab: tabIndex })
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
  renderTabPanel(course) {
    let { currentTab } = this.state
    switch (currentTab) {
      case 1: return (<div>{course.description}</div>)
      case 2: return (<div>{"Not Yet"}</div>)
      case 3: return (<div>{"None Yet"}</div>)
      default: return null
    }
  }
  renderCourses() {
    let { courses, currentTab } = this.state
    let elements = courses.map(course => {
      return (
        <div className="list-group-item" key={course.id}>
          <div className="row">
            <div className="col-3">
              <img className="img-fluid" src={course.log} alt="course logo" />
            </div>
            <div className="col-9">
              <h5>{course.title}</h5>
              <h6>&#8377;{course.price}</h6>
              {this.renderLearnButton(course)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(1)} className={currentTab === 1 ? 'nav-link active' : 'nav-link'} href="#">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(2)} className={currentTab === 2 ? 'nav-link active' : 'nav-link'} href="#">Syllabus</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(3)} className={currentTab === 3 ? 'nav-link active' : 'nav-link'} href="#">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(course)}
            </div>
          </div>
        </div>
      )
    })
    return elements
  }
  render() {
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