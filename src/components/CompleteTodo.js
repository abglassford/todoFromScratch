import React, { PropTypes } from 'react';

const CompleteTodo = ({ onClick }) =>
  <button
    className="complete"
    onClick={onClick}
    dangerouslySetInnerHTML={{
      __html: '&#x2713',
    }}
  />;

CompleteTodo.propTypes = {
  onClick: PropTypes.func,
};

CompleteTodo.defaultProps = {
  onClick: () => {},
};

export default CompleteTodo;
