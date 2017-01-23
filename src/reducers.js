const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_TODOS':
      return Object.assign({}, state, {
        todos: action.todos,
      });
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.text,
          completed: false,
          id: action.id,
        }],
      });
    case 'TOGGLE_TODO':
      console.log('reducer', action.todo.data.completed);
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.todo.data.id) {
            return Object.assign({}, todo, {
              completed: action.todo.data.completed,
            });
          }
          return todo;
        }),
      });
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, { visibilityFilter: action.filter });
    default:
      return state;
  }
};

export default todoApp;
