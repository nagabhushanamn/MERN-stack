import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js'

class App extends Component {

  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      cardFlag: false,
      title: 'Nil'
    }
    console.log("App :: constructor")
  }

  toggleCard() {
    let { cardFlag } = this.state
    this.setState({ cardFlag: !cardFlag });
  }
  changeTitle(title) {
    this.setState({ title })
  }
  renderCard() {
    let { cardFlag, title } = this.state
    if (cardFlag) return <Card title={title} />
    else return null
  }
  render() {
    console.log("App :: render")
    let { cardFlag } = this.state
    return (
      <div className="jumbotron" >
        <hr />
        <h1>react component's lifecycle</h1>
        <hr />
        <button
          onClick={e => this.toggleCard()}
          className="btn btn-primary">
          {cardFlag ? 'unmount card' : 'mount card'}
        </button>
        <hr />
        <button onClick={e => this.changeTitle('React.js')} className="btn btn-link">React.js</button>
        <button onClick={e => this.changeTitle('Node.js')} className="btn btn-link">Node.js</button>
        <button onClick={e => this.changeTitle('Express.js')} className="btn btn-link">Express.js</button>
        <hr />
        {this.renderCard()}
      </div >
    );
  }
  componentDidMount() {
    console.log("App :: componentDidMount")
  }
}

export default App;
