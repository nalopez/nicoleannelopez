import React from 'react';
import TechData from './TechData';

function MainContent() {
  return (
    <div className="main-content">
        <h3> Nicole Anne Lopez </h3>
        <h5> 
            <p> A web developer with strong PHP back-end knowledge in fields of e-commerce or payment management sites. </p>
            <p> Experienced on Scrum methodologies and a Certified Scrum Master. A good team player and performer. </p>
        </h5>

        <TechData techGroup="Development Frameworks/Libraries" techItems={[
            {techName: 'Symfony', spriteClass: 'sfLogo'},
            {techName: 'Laravel', spriteClass: 'laravelLogo'},
            {techName: 'CodeIgniter', spriteClass: 'ciLogo'},
            {techName: 'ReactJS', spriteClass: 'reactLogo'}
        ]} />
        <TechData techGroup="Database Management and Caching" techItems={[
            {techName: 'MySQL', spriteClass: 'mysqlLogo'},
            {techName: 'Redis', spriteClass: 'redisLogo'},
            {techName: 'Memcached', spriteClass: 'memcachedLogo'}
        ]} />
        <TechData techGroup="Version Control" techItems={[
            {techName: 'GitHub', spriteClass: 'githubLogo'},
            {techName: 'Gitlab', spriteClass: 'gitlabLogo'},
            {techName: 'BitBucket', spriteClass: 'bitbucketLogo'},
            {techName: 'SVN', spriteClass: 'svnLogo'}
        ]} />
        <TechData techGroup="Styling" techItems={[
            {techName: 'CSS', spriteClass: 'cssLogo'},
            {techName: 'SASS', spriteClass: 'sassLogo'},
            {techName: 'LESS', spriteClass: 'lessLogo'}
        ]} />
        <TechData techGroup="Scripting" techItems={[
            {techName: 'Javacript', spriteClass: 'jsLogo'},
            {techName: 'jQuery', spriteClass: 'jqueryLogo'}
        ]} />
        <TechData techGroup="Development Environments" techItems={[
            {techName: 'Docker', spriteClass: 'dockerLogo'},
            {techName: 'Vagrant', spriteClass: 'vagrantLogo'}
        ]} />
    </div>
  );
}

export default MainContent;
