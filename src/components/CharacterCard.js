import React from "react";

const CharacterCard = props => {
  return (
    <div className="grid-view" key={props.item}>
      <h1>{props.name}</h1>
      <p>{props.gender}</p>
      <p>{props.species}</p>
      <img src={props.image} alt={`${props.name}`}></img>
    </div>
  );
};

export default CharacterCard;
