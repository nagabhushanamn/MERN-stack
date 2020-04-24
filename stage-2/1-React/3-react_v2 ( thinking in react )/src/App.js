import React from 'react';
import './App.css';
import VotingBox from './components/VotingBox'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1>Voting App ( thinking in react.js )</h1>
        <hr />
        <VotingBox title="MERN-stack" />
      </div>
    )
  }
}

export default App;
