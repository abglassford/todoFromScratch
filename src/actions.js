const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
})

const toggleTodo = (index) => ({
  type: 'TOGGLE_TODO',
  index
})

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export {
  addTodo,
  toggleTodo,
  setVisibilityFilter
};
