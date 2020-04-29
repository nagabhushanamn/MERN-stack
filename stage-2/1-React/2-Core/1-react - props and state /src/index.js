import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 *  owner : Nag
 * 
 */

import 'bootstrap/dist/css/bootstrap.css'

// virtual DOM
ReactDOM.render(
  //React.createElement(App), // javascript sysntax
  <App title="UI with React.js" trainer="Nag"/>,
  document.getElementById('root')  // actual DOM
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
