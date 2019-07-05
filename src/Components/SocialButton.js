import React from 'react';

function SocialButton(props) {
    return (
        <span>
            <a href={props.buttonURL}>
                <img src={props.buttonImg} className="social-button" alt={props.buttonName} />
            </a>
        </span>
    );
}

export default SocialButton;
