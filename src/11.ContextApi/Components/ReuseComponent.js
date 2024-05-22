import Cart from "./Cart";

function ReuseComponent() {
  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <h1>ReuseComponent</h1>

        <Cart />
      </div>
    </>
  );
}

export default ReuseComponent;
