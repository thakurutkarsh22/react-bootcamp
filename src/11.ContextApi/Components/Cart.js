import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
  const contextData = useContext(CartContext);

  const {
    productCount = 1000,
    setProductCount = () => {},
    name,
    setname,
  } = contextData;

  console.log(contextData, "context data");

  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <div style={{ background: "yellow" }}>
          <h1>Cart</h1>

          <button
            onClick={() => {
              setProductCount((old) => old - 1);
              setname("ayush");
            }}
          >
            -
          </button>
          <p>
            PRODUCT COUNT: {productCount}, {name}
          </p>
          <button
            onClick={() => {
              setProductCount((old) => old + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
