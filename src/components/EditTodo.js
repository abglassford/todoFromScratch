import React, { PropTypes } from 'react';

const EditTodo = ({ onClick }) =>
  <button
    className="edit"
    onClick={onClick}
  >
    Edit
  </button>;

EditTodo.propTypes = {
  onClick: PropTypes.func,
};

EditTodo.defaultProps = {
  onClick: () => {},
};

export default EditTodo;
