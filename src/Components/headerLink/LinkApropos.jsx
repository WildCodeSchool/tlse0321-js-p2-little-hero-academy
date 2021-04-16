import React from 'react';

const LinkApropos = ({ closeMenu }) => (
  <div>
    <li>
      <a
        href="#Apropos"
        activeClassName="active-link"
        onClick={closeMenu}
        exact
      >
        À propos
      </a>
    </li>
  </div>
);

export default LinkApropos;
