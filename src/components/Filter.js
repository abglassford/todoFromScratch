import React from 'react';

const Filter = ({ filter, onClick }) =>
  <button
    onClick={onClick}
    >
    {filter}
  </button>

export default Filter;
