import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

import zomato from './api/zomato';
import List from './components/List';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Reviews from './components/Reviews';

function App() {

  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async (term) => {
    try {
      let response = await zomato.get("/search", {
        params: {
          q: term,
          entity_type: 'city'
        }
      })
      setResults(response.data.restaurants)
    } catch (e) {
      console.log(e)
    }
  }


  // useEffect(() => {
  //   console.log("useEffect :: on every render of App component")
  // })


  useEffect(() => {
    //console.log("useEffect :: on initial render of App component")
    searchApi("NCR")
    return function () {
      //// clean up
    }
  }, [])


  useEffect(() => {
    //console.log("useEffect :: on state change in App component")
    searchApi(term)
    return function () {
      //// clean up
    }
  }, [term])



  return (
    <div className="container">
      <hr />
      <h1>Zomato</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <SearchForm
            term={term}
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
          />
        </div>
      </div>
      <hr />
      <span className="badge badge-warning">{results.length}</span> restaurant(s) found
      <hr />

      <Router>
        <Route path="/" exact render={props => <List value={results} />} />
        <Route path="/reviews/:id" exact render={props => <Reviews {...props} />} />
      </Router>

    </div>
  );
}

export default App;
