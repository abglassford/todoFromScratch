const dispatchGetTodos = () => ({
  type: 'DISPATCH_GET_TODOS',
});

const dispatchDeleteTodo = todo => ({
  type: 'DELETE_TODO_SAGA',
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
  dispatchGetTodos,
  dispatchDeleteTodo,
  dispatchRenameTodo,
};
