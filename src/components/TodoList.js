import React from 'react';
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';
import Todo from './Todo';

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const mapState = (state) => {
  return {
    todos: getTodos(state.todos, state.visibilityFilter)
  }
};

const TodoList = ({ todos, dispatch }) =>
  <div>
    {todos.map((todo, i) =>
      <Todo
        key={i}
        text={todo.text}
        onClick={() => dispatch(toggleTodo(todo.id))}
        completed={todo.completed}
        />
    )}
  </div>;

export default connect(mapState)(TodoList);
