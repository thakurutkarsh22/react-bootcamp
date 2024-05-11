import { useState } from "react";

function ConditionalRendering(props) {
  const [isDay, setisDay] = useState(true);
  console.log("isday", isDay);

  return (
    <>
      <h1>Conditional rendering</h1>

      {/* SHORT CIRCUTING */}
      {isDay && <div>Day</div>}
      {/* TERNARY IF ELSE OPERATOR */}
      {isDay ? null : <div>Night</div>}

      {isDay ? <div>DAY</div> : <div>NIGHT</div>}

      <button
        onClick={() => {
          setisDay((oldState) => !oldState);
        }}
      >
        Toggle Day and Night
      </button>
    </>
  );
}

export default ConditionalRendering;
