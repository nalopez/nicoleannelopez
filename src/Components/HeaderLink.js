import React from 'react';

function HeaderLink(props) {
    return (
        <li className="header-link">
            <a href={props.linkURL} > {props.linkName} </a>
        </li>
    );
}

export default HeaderLink;
