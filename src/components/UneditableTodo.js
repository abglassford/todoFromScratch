import React, { PropTypes } from 'react';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';

const UneditableTodo = ({ completed, completeTodo, onDelete, text, enableEdit }) => (
  <tr>
    <td>
      <a
        className="todo"
        onClick={() => enableEdit()}
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
        onDelete={onDelete}
      />
    </td>
  </tr>
);

UneditableTodo.propTypes = {
  text: PropTypes.string,
  completeTodo: PropTypes.func,
  onDelete: PropTypes.func,
  enableEdit: PropTypes.func,
  completed: PropTypes.bool,
};

UneditableTodo.defaultProps = {
  text: '',
  completeTodo: () => {},
  onDelete: () => {},
  enableEdit: () => {},
  completed: false,
};

export default UneditableTodo;
