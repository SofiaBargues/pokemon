import React, { useState } from "react";

const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran♀",
  "nidorina",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function App() {
  const [hasWon, toggleWon] = useState(false);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();
    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLocaleLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
      alert("You won!");
    } else {
      alert("Wrong answer!");
    }
  }

  return (
    <div>
      <img
        width={512}
        height={512}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(1)",
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        alt=""
      />
      {hasWon ? (
        <button style={{ width: "100%" }} onClick={() => location.reload}>
          Play again
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" name="pokemon" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
