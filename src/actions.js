import uuidv1 from 'uuid';

const addTodo = text => ({
  type: 'ADD_TODO_SAGA',
  text,
  id: uuidv1(),
});

const toggleTodo = todo => ({
  type: 'TOGGLE_TODO_SAGA',
  todo,
});

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
};
