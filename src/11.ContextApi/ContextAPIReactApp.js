import { useState } from "react";
import GroceryComponent from "./Components/GroceryComponent";
import ProductDetailComponent from "./Components/ProductDetailComponent";
import ReuseComponent from "./Components/ReuseComponent";
import CartContext from "./context/CartContext";
import Outside from "./Components/OutsideComponent";

function ContextAPIReactApp() {
  const [productCount, setProductCount] = useState(0);
  const [name, setname] = useState("utkarsh");

  return (
    <>
      <h1>ContextAPIReactApp</h1>

      <CartContext.Provider
        value={{ productCount, setProductCount, name, setname }}
      >
        <GroceryComponent />
        <ProductDetailComponent />
        <ReuseComponent />
      </CartContext.Provider>
      {/* <Outside /> */}
    </>
  );
}

export default ContextAPIReactApp;

// STEPS

// 1. Create component and its hirarchy
// 2. Create a context
// 3. Connect components to context through PROVIDER (<CartContext.Provider>)
// 4 Consume in the COmponent (useContext(CartContext));
