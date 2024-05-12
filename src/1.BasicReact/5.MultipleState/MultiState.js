import { useState } from "react";

function MultiState(props) {
  const [name] = useState("Utkarsh");
  const [counter, setCounter] = useState(0);
  const [isDay, setIsDay] = useState(true);

  return (
    <>
      <>
        <h1>hello MultiState </h1>
        <p>{counter}</p>
        <p>{name}</p>
        <p>{isDay ? <div>Day</div> : <div>Night</div>}</p>

        <button
          onClick={() => {
            setCounter((old) => old + 1);
            setIsDay((old) => !old);
          }}
        >
          +
        </button>
      </>
    </>
  );
}

export default MultiState;
