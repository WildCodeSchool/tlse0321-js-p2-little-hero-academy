import React from 'react';

const LinkContact = ({ closeMenu }) => (
  <div>
    <li>
      <a
        href="#Contact"
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
      >
        Contact
      </a>
    </li>
  </div>
);

export default LinkContact;
