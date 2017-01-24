const addTodoSaga = text => ({
  type: 'ADD_TODO_SAGA',
  text,
});

const completeTodoSaga = todo => ({
  type: 'COMPLETE_TODO_SAGA',
  todo,
});

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

const completeTodoAction = todo => ({
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

const editTodoSaga = (todo, text) => ({
  type: 'EDIT_TODO_SAGA',
  todo: {
    ...todo,
    text,
  },
});

export {
  addTodoSaga,
  completeTodoSaga,
  setVisibilityFilter,
  completeTodoAction,
  addTodo,
  getAllTodos,
  deleteTodoSaga,
  editTodoSaga,
};
