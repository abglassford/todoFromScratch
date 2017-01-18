import React from 'react';
import Filter from './Filter';

const Footer = () => (
  <div>
    <Filter sort="All"/>
    <Filter sort="Active"/>
    <Filter sort="Completed"/>
  </div>
)

export default Footer;
