const getTodos = () => ({
  type: 'GET_TODOS',
});

const deleteTodo = todo => ({
  type: 'DELETE_TODO',
  todo,
});

const rename = (todo, text) => ({
  type: 'RENAME_TODO',
  todo: {
    ...todo,
    text,
  },
});

const addTodo = text => ({
  type: 'ADD_TODO',
  text,
});

const completeTodo = todo => ({
  type: 'COMPLETE_TODO',
  todo,
});

export {
  addTodo,
  completeTodo,
  getTodos,
  deleteTodo,
  rename,
};
