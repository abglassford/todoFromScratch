import React from 'react';
import Filter from './Filter';
import { setVisibilityFilter } from '../actions';
import { connect } from 'react-redux';

const Footer = ({ dispatch }) => (
  <div>
    <Filter
      filter="All"
      onClick={() => dispatch(setVisibilityFilter('SHOW_ALL'))}
      />
    <Filter
      filter="Active"
      onClick={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))}
      />
    <Filter
      filter="Completed"
      onClick={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))}
      />
  </div>
)

export default connect()(Footer);
