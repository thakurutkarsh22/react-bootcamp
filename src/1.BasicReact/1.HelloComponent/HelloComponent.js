import { useState } from "react";

function HelloComponent(props) {
  //   const name = props.name;
  //   const age = props.age;

  //   Destructuring
  const { name, age } = props;

  console.log(props, "HelloComponent");

  return (
    <h1>
      Hello component {name} {age}
    </h1>
  );
}

export default HelloComponent;

// Props -> Are the for the component to get the extra info from outside
// If we want to make our component re-usable we have to use props.

// ******  NEVER USER ANY HOOK IN CONDITIONS **********
