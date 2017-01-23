const addTodo = text => ({
  type: 'ADD_TODO_SAGA',
  text,
});

const toggleTodo = todo => ({
  type: 'TOGGLE_TODO_SAGA',
  todo,
});

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

const updateTodo = todo => ({
  type: 'UPDATE_TODO',
  todo,
});

export {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  updateTodo,
};
