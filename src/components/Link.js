import React, { PropTypes } from 'react';


const Link = ({ active, onClick, text }) => {
  if (active) {
    return (
      <button
        style={{
          backgroundColor: 'rgb(228, 97, 97)',
        }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Link.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

Link.defaultProps = {
  text: '',
  onClick: () => {},
  active: false,
};

export default Link;
