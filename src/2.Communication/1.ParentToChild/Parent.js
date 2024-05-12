import Child from "./Child";

function Parent() {
  const pi = 3.14;

  return (
    <>
      <h1>Parent</h1>
      <Child pi={pi} />
    </>
  );
}

export default Parent;

// A parent can communicate to child Through Props
