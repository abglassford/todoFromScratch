import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import { setVisibilityFilter } from '../actions';


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
);

Footer.propTypes = {
  dispatch: PropTypes.func,
};

Footer.defaultProps = {
  dispatch: () => {},
};

export default connect()(Footer);
