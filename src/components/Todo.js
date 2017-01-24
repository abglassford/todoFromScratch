import React, { PropTypes } from 'react';


const Todo = ({ onClick, text, completed }) =>
  <a
    className="todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </a>;

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
