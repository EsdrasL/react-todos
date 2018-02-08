import React from 'react';

import './Todo.css';

const todo = (props) => (
  <li className={props.todo.completed ? "Todo Done" : "Todo"}>
    {props.todo.description}
    <div className="Todo-Btn">
      <button
        className="Button Success"
        onClick={props.onToggle}><i className="fas fa-check"></i></button>
      <button
        className="Button Danger" 
        onClick={props.onRemove}><i className="far fa-trash-alt"></i></button>
    </div>
  </li>
);

export default todo;