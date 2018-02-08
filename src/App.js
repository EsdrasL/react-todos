import React, { Component } from 'react';

import './App.css';
import TodoList from './containers/TodoList/TodoList';
import AddTodo from './containers/AddTodo/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>To do</h2>
        <TodoList />
        <hr/>
        <AddTodo />
      </div>
    );
  }
}

export default App;
