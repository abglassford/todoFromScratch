import React from 'react';

const Todo = ({ onClick, text, completed }) =>
  <p
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    {text}
  </p>

export default Todo;
