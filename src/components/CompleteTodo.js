import React, { PropTypes } from 'react';

const CompleteTodo = ({ onClick, completed }) => {
  if (!completed) {
    return (
      <button
        className="incomplete"
        onClick={onClick}
        dangerouslySetInnerHTML={{
          __html: '?',
        }}
      />
    );
  }

  return (
    <button
      className="complete"
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: '&#x2713',
      }}
    />
  );
};

CompleteTodo.propTypes = {
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};

CompleteTodo.defaultProps = {
  completed: false,
  onClick: () => {},
};

export default CompleteTodo;
