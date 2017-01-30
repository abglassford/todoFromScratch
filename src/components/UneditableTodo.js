import React, { PropTypes } from 'react';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';
import RenameTodo from './RenameTodo';

const UneditableTodo = ({ completed, onComplete, onDelete, text, enableEdit }) => (
  <tr>
    <td
      className="todo"
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </td>
    <td>
      <RenameTodo
        onRename={enableEdit}
      />
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
