import React, { PropTypes } from 'react';

const DeleteTodo = ({ onDelete }) =>
  <button
    className="delete"
    onClick={onDelete}
    dangerouslySetInnerHTML={{
      __html: '&#10005',
    }}
  />;

DeleteTodo.propTypes = {
  onDelete: PropTypes.func,
};

DeleteTodo.defaultProps = {
  onDelete: () => {},
};

export default DeleteTodo;
