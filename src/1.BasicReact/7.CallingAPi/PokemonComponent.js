import { useEffect, useState } from "react";

function PokemonCompo() {
  console.log("start of pokemonCOmponent");
  const [pokeData, setPokeName] = useState("");

  const { name = "" } = pokeData;

  useEffect(() => {
    async function fetchPokemon() {
      console.log("INSIDE FETCH POKEOM");
      const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const response = await fetch(url);
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);

      setPokeName(data);
    }

    fetchPokemon(); // 15s
  }, []);

  return (
    <>
      {console.log("IN THE UI")}
      <h1>Pokmon</h1>
      {name}
    </>
  );
}

export default PokemonCompo;

// EFFECTS -> call API, CAlling Localstorage

// Conclusioin is we have to do SIDE EFECT after we show BASIC UI.

//  Use Effect Gurantees that it will work AFTER THE UI IS RENDERED
