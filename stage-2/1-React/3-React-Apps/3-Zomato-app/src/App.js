import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

import zomato from './api/zomato';

function App() {

  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async () => {
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

  return (
    <div className="container">
      <hr />
      <h1>Zomato</h1>
      <hr />

      <SearchForm
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <hr />
      <span className="badge badge-warning">{results.length}</span> restaurant(s) found
      <hr />
      

    </div>
  );
}

export default App;
