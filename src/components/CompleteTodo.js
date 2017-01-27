import React, { PropTypes } from 'react';

const CompleteTodo = ({ onComplete, completed }) => {
  if (!completed) {
    return (
      <button
        className="incomplete"
        onClick={onComplete}
        dangerouslySetInnerHTML={{
          __html: '?',
        }}
      />
    );
  }

  return (
    <button
      className="complete"
      onClick={onComplete}
      dangerouslySetInnerHTML={{
        __html: '&#x2713',
      }}
    />
  );
};

CompleteTodo.propTypes = {
  completed: PropTypes.bool,
  onComplete: PropTypes.func,
};

CompleteTodo.defaultProps = {
  completed: false,
  onComplete: () => {},
};

export default CompleteTodo;
