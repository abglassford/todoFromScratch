import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
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

const mapState = state => ({
  todos: getTodos(state.todos, state.visibilityFilter),
});

const TodoList = ({ todos, dispatch }) =>
  <div>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        text={todo.text}
        onClick={() => dispatch(toggleTodo(todo.id))}
        completed={todo.completed}
      />,
    )}
  </div>;

TodoList.propTypes = {
  todos: PropTypes.array,
  dispatch: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  dispatch: () => {},
};

export default connect(mapState)(TodoList);
