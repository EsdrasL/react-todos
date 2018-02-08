import * as actionsTypes from './actionTypes';

export const addTodo = (description) => {
  return {
    type: actionsTypes.ADD_TODO,
    description: description
  }
}

export const removeTodo = (todoIndex) => {
  return {
    type: actionsTypes.REMOVE_TODO,
    todoIndex: todoIndex
  }
}

export const togglePendency = (todoIndex) => {
  return {
    type: actionsTypes.TOGGLE_PENDENCY,
    todoIndex: todoIndex
  }
}
