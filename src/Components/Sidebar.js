import React from 'react';

import photo from '../photo.png';
import facebookLogo from '../icons/facebookLogo.png';
import twitterLogo from '../icons/twitterLogo.png';
import gmailLogo from '../icons/gmailLogo.png';

import SocialLink from './SocialLink';
import SocialButton from './SocialButton';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="image-cropper">
            <img className="sidebar-photo" src={photo} />
        </div>

        <div>
            <SocialLink linkName="LinkedIn" siteURL="https://www.linkedin.com/in/nicole-anne-lopez-4415aa121/" />
            <SocialLink linkName="GitHub" siteURL="https://github.com/nalopez" />
            <SocialLink linkName="Docker Hub" siteURL="https://hub.docker.com/u/nadclopez" />
        </div>

        <div className="social-button-group">
            <SocialButton buttonName="Facebook" buttonURL="https://www.facebook.com/nicanixnicanix" buttonImg={facebookLogo}/>
            <SocialButton buttonName="Twitter" buttonURL="https://www.twitter.com/NicanixNicanix" buttonImg={twitterLogo}/>
            <SocialButton buttonName="Google Mail" buttonURL="https://www.twitter.com/NicanixNicanix" buttonImg={gmailLogo}/>
        </div>

    </div>
  );
}

export default Sidebar;
