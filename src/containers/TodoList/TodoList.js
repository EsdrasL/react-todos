import React from 'react';
import { connect } from 'react-redux';

import './TodoList.css';
import Todo from '../../components/Todo/Todo';
import { togglePendency, removeTodo } from '../../store/actions'

const todoList = (props) => (
  <div className="TodoList">
    <ul>
      {props.todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onToggle={() => props.onTogglePendency(index)}
          onRemove={() => props.onRemoveTodo(index)} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTogglePendency: (index) => dispatch(togglePendency(index)),
    onRemoveTodo: (index) => dispatch(removeTodo(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);