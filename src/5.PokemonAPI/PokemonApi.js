import { useEffect, useState } from "react";

function PokemonAPI() {
  console.log("ENTERING THE COMPONENT");
  const [data, setData] = useState({
    name: "",
    height: "",
    weight: "",
  });
  const { name, height, weight } = data;

  useEffect(() => {
    async function fetchData() {
      console.log("inside the FETCH DATA");

      const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {console.log("SHOWING THE UI")}
      <h1>Pokemon API</h1>
      <p>NAME: {name}</p>
      <p>HEIGHT: {height}</p>
      <p>WEIGHT: {weight}</p>
    </>
  );
}

export default PokemonAPI;
