import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';


const Footer = () => (
  <p>
    <FilterLink
      filter="SHOW_ALL"
      text="All"
    />
    <FilterLink
      filter="SHOW_ACTIVE"
      text="Active"
    />
    <FilterLink
      filter="SHOW_COMPLETED"
      text="Completed"
    />
  </p>
);

Footer.propTypes = {
  dispatch: PropTypes.func,
};

Footer.defaultProps = {
  dispatch: () => {},
};

export default connect()(Footer);
