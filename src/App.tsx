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
  "nidoran",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function App() {
  const [hasWon, toggleWon] = useState(false);
  const [guessedPokemon, setGuessedPokemon] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();
    const { pokemon } = event.currentTarget;
    const guessedPokemonName = pokemon.value.toLocaleLowerCase();

    if (guessedPokemonName === POKEMONS[MATCH]) {
      setGuessedPokemon(guessedPokemonName);
      toggleWon(true);
    } else {
      alert("Wrong answer!");
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/ca/e0/1a/cae01ab5cce960db0d7819cc96e97ce8.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Ajusta la altura según tus necesidades
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
        <button
          style={{ width: "200px", padding: "10px" }}
          onClick={() => location.reload()}
        >
          Play again
        </button>
      ) : (
        // <form onSubmit={handleSubmit}>
        //   <input  autoFocus type="text" name="pokemon" />
        //   <button type="submit">Submit</button>
        // </form>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            autoFocus
            type="text"
            name="pokemon"
            style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
          />
          <button type="submit" style={{ width: "200px", padding: "10px" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
