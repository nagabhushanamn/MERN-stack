import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AlbumList from './AlbumList';
import Album from './Album';

function App() {
  return (
    <div className="container">
      <hr />
      <h1> react-app using hooks </h1>
      <hr />
      <Router>
        <div>
          <hr />
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/albums">Albums</Link>
            </li>
          </ul>
          <hr />
          <Route path="/albums" exact component={AlbumList} />
          <Route path="/albums/:id" exact component={Album} />
        </div>
      </Router>

    </div>
  );
}

export default App;
