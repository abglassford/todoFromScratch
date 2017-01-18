import { combineReducers } from 'redux';

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

const visibilityFilter = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        visibilityFilter: action.filter
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
