import React from 'react';
import TechData from './TechData';

function MainContent() {
  return (
    <div className="main-content">
        <h3> Nicole Anne Lopez </h3>
        <h5> A web developer with strong PHP back-end knowledge. Experienced on Scrum methodologies and a Certified Scrum Master. A good team player and performer. </h5>

        <TechData techGroup="MVC Frameworks" techItems={['Symfony', 'ReactJS', 'CodeIgniter']} />
        <TechData techGroup="Database Management and Caching" techItems={['MySQL', 'Redis', 'Memcached']} />
        <TechData techGroup="Version Control" techItems={['Git (GitHub, Gitlab, BitBucket)', 'SVN']} />
        <TechData techGroup="Styling" techItems={['CSS', 'SASS', 'LESS']} />
        <TechData techGroup="Scripting" techItems={['Javacript', 'jQuery']} />
        <TechData techGroup="Development Environments" techItems={['Docker', 'Vagrant']} />
    </div>
  );
}

export default MainContent;
