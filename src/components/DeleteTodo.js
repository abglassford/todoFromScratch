import React, { PropTypes } from 'react';

const DeleteTodo = ({ onClick }) =>
  <button
    className="delete"
    onClick={onClick}
  >
    X
  </button>;

DeleteTodo.propTypes = {
  onClick: PropTypes.func,
};

DeleteTodo.defaultProps = {
  onClick: () => {},
};

export default DeleteTodo;
