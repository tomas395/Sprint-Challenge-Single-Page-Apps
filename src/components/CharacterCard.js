import React from "react";

const CharacterCard = props => {
  return (
    <div className="grid-view">
      <h1>{props.name}</h1>
      <p>{props.gender}</p>
      <p>{props.species}</p>
    </div>
  );
};

export default CharacterCard;
