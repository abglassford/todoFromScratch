import React, { PropTypes } from 'react';

const DeleteTodo = ({ onClick }) =>
  <button
    className="delete"
    onClick={onClick}
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
