import React from 'react';
import './App.css';


function Clock() {
  return (
    <div className="card">
      <div className="card-header">Asia/Kolkata</div>
      <div className="card-body">
        <span className="badge badge-danger">{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</span>
      </div>
    </div>
  )
}

// App component
function App() {
  return (
    <div className="container">
      <hr />
      <h1> UI with React.js</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
