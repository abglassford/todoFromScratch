const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

const setComplete = todo => ({
  type: 'SET_COMPLETE_TODO',
  todo,
});

const setAddTodo = todo => ({
  type: 'SET_ADD_TODO',
  todo,
});

const setGetTodos = todos => ({
  type: 'SET_GET_TODOS',
  todos,
});

export {
  setVisibilityFilter,
  setComplete,
  setAddTodo,
  setGetTodos,
};
