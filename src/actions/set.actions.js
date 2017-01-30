const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

const replaceTodos = todos => ({
  type: 'REPLACE_TODOS',
  todos,
});

export {
  setVisibilityFilter,
  replaceTodos,
};
