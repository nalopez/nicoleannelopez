import React from 'react';
import TechData from './TechData';

import sfLogo from '../images/sfLogo.png';
import laravelLogo from '../images/laravelLogo.png';
import ciLogo from '../images/ciLogo.png';
import reactLogo from '../images/reactLogo.png';
import mysqlLogo from '../images/mysqlLogo.png';
import redisLogo from '../images/redisLogo.png';
import memcachedLogo from '../images/memcachedLogo.png';
import githubLogo from '../images/githubLogo.png';
import gitlabLogo from '../images/gitlabLogo.png';
import bitbucketLogo from '../images/bitbucketLogo.png';
import svnLogo from '../images/svnLogo.png';
import cssLogo from '../images/cssLogo.png';
import sassLogo from '../images/sassLogo.png';
import lessLogo from '../images/lessLogo.png';
import jsLogo from '../images/jsLogo.png';
import jqueryLogo from '../images/jqueryLogo.png';
import dockerLogo from '../images/dockerLogo.png';
import vagrantLogo from '../images/vagrantLogo.png';

function MainContent() {
  return (
    <div className="main-content">
        <h3> Nicole Anne Lopez </h3>
        <h5> 
            <p> A web developer with strong PHP back-end knowledge in fields of e-commerce or payment management sites. </p>
            <p> Experienced on Scrum methodologies and a Certified Scrum Master. A good team player and performer. </p>
        </h5>

        <TechData techGroup="Development Frameworks/Libraries" techItems={[
            {techName: 'Symfony', techImage: sfLogo},
            {techName: 'Laravel', techImage: laravelLogo},
            {techName: 'CodeIgniter', techImage: ciLogo},
            {techName: 'ReactJS', techImage: reactLogo}
        ]} />
        <TechData techGroup="Database Management and Caching" techItems={[
            {techName: 'MySQL', techImage: mysqlLogo},
            {techName: 'Redis', techImage: redisLogo},
            {techName: 'Memcached', techImage: memcachedLogo}
        ]} />
        <TechData techGroup="Version Control" techItems={[
            {techName: 'GitHub', techImage: githubLogo},
            {techName: 'Gitlab', techImage: gitlabLogo},
            {techName: 'BitBucket', techImage: bitbucketLogo},
            {techName: 'SVN', techImage: svnLogo}
        ]} />
        <TechData techGroup="Styling" techItems={[
            {techName: 'CSS', techImage: cssLogo},
            {techName: 'SASS', techImage: sassLogo},
            {techName: 'LESS', techImage: lessLogo}
        ]} />
        <TechData techGroup="Scripting" techItems={[
            {techName: 'Javacript', techImage: jsLogo},
            {techName: 'jQuery', techImage: jqueryLogo}
        ]} />
        <TechData techGroup="Development Environments" techItems={['Docker', 'Vagrant']} techItems={[
            {techName: 'Docker', techImage: dockerLogo},
            {techName: 'Vagrant', techImage: vagrantLogo}
        ]} />
    </div>
  );
}

export default MainContent;
