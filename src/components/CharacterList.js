import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)

      .then(res => {
        console.log("Fetched!", res.data);
        setCharacter(res.data.results);
      })
      .catch(err => console.log("Error: The data was not returned!", err));
  }, []);

  // End of Axios Request

  return (
    <section className="character-list">
      <Link to="/">
        <button>Home</button>
      </Link>
      {character.map(item => (
        <CharacterCard
          key={item.id}
          name={item.name}
          gender={item.gender}
          species={item.species}
          status={item.status}
          image={item.image}
        />
      ))}
    </section>
  );
}
