import { useEffect, useState } from "react";

function DigitalClock() {
  const obj = {
    // humonous
  };
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("inside the useEffect");

    const intervalID = setInterval(() => {
      console.log("inside the setIntrval");

      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      obj = null;
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <h1>Digital CLocks</h1>
      {time}
    </>
  );
}

export default DigitalClock;
