import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Greeting from './components/Greeting'

//-------------------------------------
// Function syntax
//-------------------------------------

// function App() {
//   return (
//     <div className="container">
//       im app component
//     </div>
//   );
// }

// export default App;

//-------------------------------------
// class syntax
//-------------------------------------

/**
 * 
 * author : Aditya
 * 
 */

class App extends React.Component {
  constructor(props) {
    super();
    console.log("App :: constructor");
    //console.log(props);
    this.state = {
      message: 'greetings'
    }
  }
  changeMessage(message) {
    this.setState({ message: message });  // re-render component to V-DOM & triggers diffing algorithm to find differences
  }
  render() {
    console.log("App :: render");
    let { title, trainer } = this.props;
    let { message } = this.state;
    return (
      <div className="jumbotron">
        <hr />
        <h1>{title} : <small>by {trainer}</small></h1>
        <hr />

        <button onClick={e => this.changeMessage("good morning")} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage("good noon")} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage("good evening")} className="btn btn-primary">GE</button>&nbsp;
        <hr />
        <Greeting message={message} />
        <hr />
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}
App.defaultProps = {
  trainer: 'Unknown'
}

export default App