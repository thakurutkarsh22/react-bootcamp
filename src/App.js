import logo from "./logo.svg";
import "./App.css";
import HelloComponent from "./1.BasicReact/1.HelloComponent/HelloComponent";

function App() {
  return (
    <div className="App">
      <h2>App </h2>
      <HelloComponent name={"utkarsh"} age={12} />
      <HelloComponent name={"ankus"} age={22} />
      <HelloComponent name={"amit"} age={32} />
      <HelloComponent name={"sumit"} age={42} />
      <HelloComponent name={"animesh"} age={52} />
    </div>

    // MORE ABOUT JSX

    // <div>
    //   <p></p>

    //   <h1></h1>
    //   <div></div>
    // </div>

    //<div>abcd</div>  // tHis is illegal bec i already have a root node.

    // BEHIND THE SCNESE

    // JS ->
    // document.createElement()

    // REACT ->
    // return React.createElement("div", {}, React.createElement("p"));
    // return React.createElement ("div", {}, ""); // this is illegal
  );
}

export default App;

/*

  COMPONENT:  App is a component.

  inside a component we can use a component 
  inside index.js we can also use multiple components.



   JSX -> Javascript XML.
   It looks and feel like HTML but in reality its not HTML.

   Behind the scences it is something different. -> (REact.createelement());

  We cannot have 2 return from a function hence we cant have 2 Roots in JSX.



*/
