import { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductDetailComponent() {
  const contextData = useContext(CartContext);

  const { productCount = 0, setProductCount = () => {} } = contextData;
  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <div style={{ background: "yellow" }}>
          <h1>ProductDetailComponent</h1>

          <button
            onClick={() => {
              setProductCount((old) => old - 1);
            }}
          >
            -
          </button>
          <p>PRODUCT COUNT: {productCount}</p>
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

export default ProductDetailComponent;
