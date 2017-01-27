import React, { PropTypes } from 'react';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';

const UneditableTodo = ({ completed, onComplete, onDelete, text, enableEdit }) => (
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
        onComplete={onComplete}
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
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  enableEdit: PropTypes.func,
  completed: PropTypes.bool,
};

UneditableTodo.defaultProps = {
  text: '',
  onComplete: () => {},
  onDelete: () => {},
  enableEdit: () => {},
  completed: false,
};

export default UneditableTodo;
