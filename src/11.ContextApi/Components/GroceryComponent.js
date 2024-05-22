import ProductListComponent from "./ProductListComponent";

function GroceryComponent() {
  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <h1>GroceryComponent</h1>

        <ProductListComponent />
      </div>
    </>
  );
}

export default GroceryComponent;
