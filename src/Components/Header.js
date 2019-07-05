import React from 'react';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div className="header">
        <ul className="header-link-group">
            <HeaderLink linkName="Dev Profile" linkURL="http://www.nicoleannelopez.com"/>
            <HeaderLink linkName="Personal Blog" linkURL="https://nicoleannelopez.wordpress.com"/>
        </ul>
    </div>
  );
}

export default Header;
