import React, { PropTypes } from 'react';

const Todo = ({ onClick, text, completed }) =>
  <p
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </p>;

Todo.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

Todo.defaultProps = {
  onClick: () => {},
  text: '',
  completed: false,
};


export default Todo;
