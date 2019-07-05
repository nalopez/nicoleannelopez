import React from 'react';

function SocialLink(props) {
    return (
        <div className="social-link">
            <div className="social-link-name"> {props.linkName}: </div>
            <div> <a href={props.siteURL} >{props.siteURL}</a>  </div>
        </div>
    );
}

export default SocialLink;
