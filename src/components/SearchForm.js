import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function SearchForm() {
  // defining usestate array and empty quotes to reset
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState("");

  // fetching data
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const characters = response.data.results.filter(char =>
        char.name.toLowerCase().includes(searchResults.toLowerCase())
      );

      setSearchTerm(characters);
    });
  }, [searchResults]);

  const handleInputChange = event => {
    setSearchResults(event.target.value);
  };

  // time to return form
  return (
    <div>
      <form>
        <input
          id="name"
          type="text"
          name="text"
          placeholder="Search"
          value={searchResults}
          onChange={handleInputChange}
        />
        <Link to="/">
          <button>Home</button>
        </Link>
      </form>

      {/* Mapping crap */}
      {searchTerm.map(item => {
        return (
          <CharacterCard
            key={item.id}
            name={item.name}
            species={item.species}
            status={item.status}
          />
        );
      })}
    </div>
  );
}
export default SearchForm;
