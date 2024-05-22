import { useContext } from "react";
import CartContext from "../context/CartContext";

function Outside() {
  const contextData = useContext(CartContext);
  console.log(contextData, "contextData in outside component");

  const { productCount = 0, setProductCount = () => {} } = contextData;
  return (
    <>
      <h1>Outside</h1>
      <p>PRODUCT COUNT: {productCount}</p>
    </>
  );
}

export default Outside;
