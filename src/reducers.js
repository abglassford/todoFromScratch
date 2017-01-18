import { combineReducers } from 'redux';

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

const visibilityFilter = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log('visibilityFilter');
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
      console.log('add todo');
      break;
    case 'TOGGLE_TODO':
      console.log('toggle todo');
      break;
    default:
    return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todoReduce
});

export default todoApp;
