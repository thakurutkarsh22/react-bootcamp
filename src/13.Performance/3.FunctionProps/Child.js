import React from "react";

function Child(props) {
  const { arr } = props;
  console.log("CHILD RENDERING");
  return (
    <>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h1>I am child 3</h1>
        <p>hey thre I like toys</p>
        {arr}
      </div>
    </>
  );
}

export default React.memo(Child);

// React.memo -> will save a snapshot of your child component, and will use that snapshot at every re-render
// until n unless props changes

// in here the arr props are changing.
