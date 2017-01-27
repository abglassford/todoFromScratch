import React, { PropTypes } from 'react';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';

const UneditableTodo = ({ completed, completeTodo, deleteTodo, text, editTodo }) => (
  <tr>
    <td>
      <a
        className="todo"
        onClick={() => editTodo()}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}
      </a>
    </td>
    <td>
      <CompleteTodo
        onClick={completeTodo}
        completed={completed}
      />
      <DeleteTodo
        onClick={deleteTodo}
      />
    </td>
  </tr>
);

UneditableTodo.propTypes = {
  text: PropTypes.string,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  completed: PropTypes.bool,
};

UneditableTodo.defaultProps = {
  text: '',
  completeTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  completed: false,
};

export default UneditableTodo;
