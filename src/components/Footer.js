import React from 'react';
import Filter from './Filter';

const Footer = () => (
  <div>
    <Filter
      filter="All"
      onClick={() => console.log('footer')}
      />
    <Filter
      filter="Active"
      onClick={() => console.log('footer')}
      />
    <Filter
      filter="Completed"
      onClick={() => console.log('footer')}
      />
  </div>
)

export default Footer;
