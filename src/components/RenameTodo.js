import React, { PropTypes } from 'react';

const RenameTodo = ({ onRename }) => (
  <button
    className="rename"
    dangerouslySetInnerHTML={{
      __html: '&#9998',
    }}
    onClick={onRename}
  />
);

RenameTodo.propTypes = {
  onRename: PropTypes.func,
};

RenameTodo.defaultProps = {
  onRename: () => {},
};

export default RenameTodo;
