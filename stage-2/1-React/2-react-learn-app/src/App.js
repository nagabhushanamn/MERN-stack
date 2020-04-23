import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


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
  }
  render() {
    console.log("App :: render");
    // this.props.title="TITLE" // Error , i.e comp cannot mutate given props
    let { title, trainer } = this.props;
    // const tnr = trainer.toUpperCase()
    return (
      <div className="container">
        <hr />
        <h1>{title} : <small>by {trainer}</small></h1>
        <hr />
        im app component
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