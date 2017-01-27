import React, { PropTypes } from 'react';
import DeleteTodo from './DeleteTodo';
import CompleteTodo from './CompleteTodo';

const edit = () => {
  if (!this.props.completed) {
    this.setState({
      editable: true,
    });
  }
}

const Uneditabletodo = ({ text, completeTodo, completed, deleteTodo, edit }) => (
  <tr>
    <td>
      <a
        className="todo"
        onClick={() => edit}
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

Uneditabletodo.propTypes = {
  text: PropTypes.string,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  completed: PropTypes.bool,
};

Uneditabletodo.defaultProps = {
  text: '',
  completeTodo: () => {},
  deleteTodo: () => {},
  completed: false,
};

export default Uneditabletodo;
