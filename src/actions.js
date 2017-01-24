const addTodoSaga = text => ({
  type: 'ADD_TODO_SAGA',
  text,
});

const updateTodoSaga = todo => ({
  type: 'UPDATE_TODO_SAGA',
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

const addTodo = todo => ({
  type: 'ADD_TODO',
  todo,
});

const getAllTodos = todos => ({
  type: 'GET_ALL_TODOS',
  todos,
});

const deleteTodoSaga = todo => ({
  type: 'DELETE_TODO_SAGA',
  todo,
});

export {
  addTodoSaga,
  updateTodoSaga,
  setVisibilityFilter,
  updateTodo,
  addTodo,
  getAllTodos,
  deleteTodoSaga,
};
