import React from 'react';

const Link = ({ closeMenu, href, label }) => (
  <div>
    <li>
      <a href={href} activeClassName="active-link" onClick={closeMenu} exact>
        {label}
      </a>
    </li>
  </div>
);

export default Link;
