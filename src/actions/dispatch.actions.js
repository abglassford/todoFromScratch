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

const dispatchCompleteTodo = todo => ({
  type: 'DISPATCH_COMPLETE_TODO',
  todo,
});

export {
  dispatchAddTodo,
  dispatchCompleteTodo,
  getTodos,
  deleteTodo,
  dispatchRenameTodo,
};
