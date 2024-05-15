// SIDE EFFECT -> API CALL, LocalStrageStuff, Any LOGGING, setInterval, setTimeout

// useEffect -> call the  desired function after the UI.

import { useEffect, useState } from "react";

// without useEFECt ->

// function PokemonDataComponent() {
//   console.log("ENTERING PokemonDataComponent");

//   //   let names; // js VARAIBLE

//   const [names, setName] = useState(); // STATE VARIABLE ..

//   async function fetchData() {
//     console.log("CALLING FETCH DATA");

//     const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
//     const response = await fetch(url);
//     const data = await response.json();
//     const { name, height, weight } = data;
//     // console.log(name, height, weight, "pokemon data");

//     // names = name;
//     setName(name);
//     // console.log("namessszzz", names);
//     return name;
//   }

//   console.log("rendering before UI");

//   return (
//     <>
//       {console.log("rendering IN THE UI")}
//       <h1>POKEMON PIKACHU DATA</h1>
//       {names}
//       {}
//       {"helo"}
//     </>
//   );

//   fetchData(); // 10 sec
// }

// export default PokemonDataComponent;

// WHEN TO USE USEEFFECT ->

// function HookUseEffect() {

// }

// export default HookUseEffect;

/*
In this example we are showing the UI AFTER THE WAIT OF API CALL.
*/

// WITH USE EFFECT

function PokemonDataComponent() {
  console.log("ENTERING PokemonDataComponent");

  //   let names; // js VARAIBLE

  let [names, setName] = useState(); // STATE VARIABLE ..

  useEffect(() => {
    async function fetchData() {
      console.log("CALLING FETCH DATA");

      const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const response = await fetch(url);
      const data = await response.json();
      const { name, height, weight } = data;
      // console.log(name, height, weight, "pokemon data");

      // names = name;
      setName(name);
      // names = name;
      console.log("namessszzz", names);
      return name;
    }
    fetchData();
  }, []);

  console.log("rendering before UI");

  return (
    <>
      {console.log("rendering IN THE UI")}
      <h1>POKEMON PIKACHU DATA</h1>
      {names}
      {}
      {"helo"}
    </>
  );
}

export default PokemonDataComponent;

// MAIN LEARNING -> We understood ->

/*
1. we need useState to show the (updated) UI 
2. we need to have SIDE EFFECT (api, localstorage, ) should be happen in useEffect.

**** useEFFECT will ALWAYS work AFTER THE UI.******


*/
