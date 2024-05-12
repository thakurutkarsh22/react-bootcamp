import { useState } from "react";

function MultipleState() {
  const [state, setState] = useState({
    counter: 0,
    name: "utkarsh",
    isDay: true,
  });

  const { counter, name, isDay } = state;

  return (
    <>
      <h1>hello </h1>
      <p>{counter}</p>
      <p>{name}</p>
      <p>{isDay ? <div>Day</div> : <div>Night</div>}</p>

      <button
        onClick={() => {
          setState((oldState) => {
            return {
              ...oldState,

              counter: oldState.counter + 1,
              isDay: !oldState.isDay,
            };
          });
        }}
      >
        +
      </button>
    </>
  );
}

export default MultipleState;
