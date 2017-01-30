const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'REPLACE_TODOS':
      return Object.assign({}, state, {
        todos: action.todos,
      });
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, { visibilityFilter: action.filter });
    default:
      return state;
  }
};

export default todoApp;
