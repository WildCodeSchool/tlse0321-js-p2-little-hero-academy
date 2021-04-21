import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({
  closeMenu, href, label, to,
}) => (
  <div>
    <Link to={to}>
      <li className="item-nav">
        <a href={href} activeClassName="active-link" onClick={closeMenu} exact>
          <span>{label}</span>
        </a>
      </li>
    </Link>
  </div>
);

export default Links;
