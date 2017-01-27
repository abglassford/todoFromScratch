const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_TODOS':
      return Object.assign({}, state, {
        todos: action.todos,
      });
    case 'SET_ADD_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.todo.text,
          completed: action.todo.completed,
          id: action.todo.id,
        }],
      });
    case 'SET_COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.todo.id) {
            return Object.assign({}, todo, action.todo);
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
