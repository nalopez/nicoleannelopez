import React from 'react';

function TechData(props) {
  return (
      <div className="tech-data">
            <div className="tech-group"> {props.techGroup} </div>
            <ul className="tech-group-list">
            {props.techItems.map((value, index) => {
                return <li className="tech-listing" key={index}><img className="tech-image" src={value.techImage} alt={value.techName} /></li>
            })}
            </ul>
      </div>
  );
}

export default TechData;
