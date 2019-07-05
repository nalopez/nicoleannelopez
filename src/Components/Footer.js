import React from 'react';
import logo from '../logo.svg';

function Footer() {
    return (
        <div className="footer">
            <div>Site powered by ReactJS  <img src={logo} className="App-logo" alt="logo" /> </div>
            <div>Logo powered by <b> Vash Illustrate </b></div> 
        </div>
    );
}

export default Footer;
