const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

const setComplete = todo => ({
  type: 'SET_COMPLETE_TODO',
  todo,
});

const addTodo = todo => ({
  type: 'ADD_TODO',
  todo,
});

const replaceTodos = todos => ({
  type: 'REPLACE_TODOS',
  todos,
});

export {
  setVisibilityFilter,
  setComplete,
  addTodo,
  replaceTodos,
};
