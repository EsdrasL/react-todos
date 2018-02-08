import * as actionTypes from './actionTypes';

const addTodo = (state, action) => {
  return [
    ...state,
    {
      description: action.description,
      completed: false
    }
  ]
}

const removeTodo = (state, action) => {
  return state.filter((_, index) => index !== action.todoIndex);
}

const togglePendency = (state, action) => {
  return state.map((todo, index) => {
    if (index === action.todoIndex) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo;
  });
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: return addTodo(state, action);
    case actionTypes.REMOVE_TODO: return removeTodo(state, action);
    case actionTypes.TOGGLE_PENDENCY: return togglePendency(state, action);
    default: return state;
  }
}

export default reducer;