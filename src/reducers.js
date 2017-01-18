import { combineReducers } from 'redux';

const visibilityFilter = (state = {}, action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        visibilityFilter: action.type
    };
    default:
      return state;
  }
};

const todoReduce = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return state;
    case 'TOGGLE_TODO':
      return state;
    default:
    return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todoReduce
});

export default todoApp;
