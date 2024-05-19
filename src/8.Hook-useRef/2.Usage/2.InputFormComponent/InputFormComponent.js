import { useEffect, useRef } from "react";

function InputFormComponent() {
  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    console.log(ref);
    const imputBoxElement = ref.current;
    imputBoxElement.focus();

    ref2.current.focus();
  });

  return (
    <>
      <h1>Input form Component</h1>
      <input
        id="input-box"
        ref={ref}
        type="text"
        placeholder="same name here"
      />

      <input
        id="input-box"
        ref={ref2}
        type="text"
        placeholder="same name here 222cc"
      />
    </>
  );
}

export default InputFormComponent;
