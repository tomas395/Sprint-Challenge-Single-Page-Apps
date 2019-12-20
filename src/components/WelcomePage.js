import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const Card = styles.div`
//   background-color: grey;
//   width: 10%;
// `;

// const Card = styled.div`
//   background-color: grey;
//   width: 10%;
// `;
// const Title = styled.h2`
//   text-align: center;
// `;
// const H4 = styled.h4`
//   text-align: center;
//   color: black;
// `;

const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
  margin: 5px, 0;
  color: white;
  background-color: green;
  border: solid 2px black;
`;

export default function WelcomePage() {
  return (
    <div>
      {/* <Card> */}
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <Link to="/Characters">
            <Buttons>Characters</Buttons>
          </Link>
          <Link to="/Search">
            <Buttons>Search</Buttons>
          </Link>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
      </section>
      {/* </Card> */}
    </div>
  );
}
