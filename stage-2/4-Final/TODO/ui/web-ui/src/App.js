import React, { useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import TodoList from './components/TodoList';

import { getTodos } from './actions/todos'
import { useDispatch } from 'react-redux'
import TodoInput from './components/TodoInput';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <div className="container">
      <hr />
      <h1>Todos</h1>
      <hr />
      <TodoInput />
      <hr/>
      <TodoList />
    </div>
  );
}

export default App;
