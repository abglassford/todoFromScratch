import React, { PropTypes } from 'react';

const Filter = ({ filter, onClick }) =>
  <button
    onClick={onClick}
  >
    {filter}
  </button>;

Filter.propTypes = {
  filter: PropTypes.string,
  onClick: PropTypes.func,
};

Filter.defaultProps = {
  filter: '',
  onClick: () => {},
};

export default Filter;
