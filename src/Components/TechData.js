import React from 'react';

import techSprite from '../images/sprite_tech.png';

function TechData(props) {
  return (
      <div className="tech-data">
            <div className="tech-group"> {props.techGroup} </div>
            <div className="tech-group-list">
            {props.techItems.map((value, index) => {
                return <div className="tech-wrapper">
                    <div className={"tech-image " + value.spriteClass} alt={value.techName}></div>
                </div>
            })}
            </div>
      </div>
  );
}

export default TechData;
