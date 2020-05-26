import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux'

function increment(value) {
  return { type: 'INCREMENT', value }
}
function decrement(value) {
  return { type: 'DECREMENT', value }
}
function incrementAsync(value) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(value * 10))
    }, 3000)
  }
}

const Counter = ({ title }) => {

  const dispatch = useDispatch()

  const handleCount = n => {
    if (n > 0)
      dispatch(increment(n))
    else
      dispatch(decrement(n))
  }

  const handleCountAsync = (n) => {
    dispatch(incrementAsync(n))
  }

  return (
    <div className="alert alert-info">
      <hr />
      {title}
      <hr />
      &nbsp;<button onClick={e => handleCount(1)} className="btn btn-primary">+1</button>
      &nbsp;<button onClick={e => handleCount(-1)} className="btn btn-primary">-1</button>
      &nbsp;<button onClick={e => handleCountAsync(10)} className="btn btn-primary">+10 ( async )</button>
      <hr />
    </div>
  )
}

const Summary = () => {
  let count = useSelector(state => state.count)
  console.log(count)
  return (
    <div className="alert alert-warning">
      Total count : {count}
    </div>
  )
}


function App() {
  return (
    <div className="container">
      <hr />
      <h1>UI</h1>
      <hr />
      <Counter title="Number counting" />
      <hr />
      <Summary value={0} />
    </div>
  );
}

export default App;
