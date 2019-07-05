import React from 'react';

function TechData(props) {
  return (
      <div className="tech-data">
            <span className="tech-group"> {props.techGroup} </span>
            <ul>
            {props.techItems.map((value, index) => {
                return <li key={index}>{value}</li>
            })}
            </ul>
      </div>
  );
}

export default TechData;
