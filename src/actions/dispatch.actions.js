const getTodos = () => ({
  type: 'GET_TODOS',
});

const deleteTodo = todo => ({
  type: 'DELETE_TODO',
  todo,
});

const dispatchRenameTodo = (todo, text) => ({
  type: 'DISPATCH_RENAME_TODO',
  todo: {
    ...todo,
    text,
  },
});

const dispatchAddTodo = text => ({
  type: 'DISPATCH_ADD_TODO',
  text,
});

const completeTodo = todo => ({
  type: 'COMPLETE_TODO',
  todo,
});

export {
  dispatchAddTodo,
  completeTodo,
  getTodos,
  deleteTodo,
  dispatchRenameTodo,
};
