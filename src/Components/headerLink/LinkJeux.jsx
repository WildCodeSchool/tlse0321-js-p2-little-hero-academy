import React from 'react';

const LinkJeux = ({ closeMenu }) => (
  <div>
    <li>
      <a href="#Jeux" activeClassName="active-link" onClick={closeMenu} exact>
        Jeux
      </a>
    </li>
  </div>
);

export default LinkJeux;
