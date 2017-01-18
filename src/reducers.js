// import { combineReducers } from 'redux';

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

const todoApp = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.text,
          completed: false
        }]
      });
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo, i) => {
          console.log(todo);
          if(i === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo;
        })
      });
    case 'SET_VISIBILITY_FILTER':
      console.log(action.filter);
      return Object.assign({}, state, {visibilityFilter: action.filter});
    default:
      return state;
  }
}

export default todoApp;