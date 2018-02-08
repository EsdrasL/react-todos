import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AddTodo.css';
import { addTodo } from '../../store/actions';

class AddTodo extends Component {
  state = {
    todoDescription: ''
  }

  onAddHandler = () => {
    this.props.onAdd(this.state.todoDescription);
    this.setState({ todoDescription: '' });
  }

  inputChangeHandler = (event) => {
    this.setState({ todoDescription: event.target.value });
  }

  render() {
    return (
      <div className="AddTodo">
        <input
          placeholder="Todo description"
          type="text"
          value={this.state.todoDescription}
          onChange={this.inputChangeHandler}/>
        <button
          className="Button Save"
          onClick={this.onAddHandler}>Save Todo</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (description) => dispatch(addTodo(description))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);