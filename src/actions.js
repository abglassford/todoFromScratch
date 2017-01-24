const addTodoSaga = text => ({
  type: 'ADD_TODO_SAGA',
  text,
});

const completeTodoSaga = todo => ({
  type: 'UPDATE_TODO_SAGA',
  todo,
});

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

const updateTodoAction = todo => ({
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
  completeTodoSaga,
  setVisibilityFilter,
  updateTodoAction,
  addTodo,
  getAllTodos,
  deleteTodoSaga,
};
