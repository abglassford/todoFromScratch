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
  onClick: PropTypes.func,
};

DeleteTodo.defaultProps = {
  onClick: () => {},
};

export default DeleteTodo;
