import logo from "./logo.svg";
import "./App.css";
import HelloComponent from "./1.BasicReact/1.HelloComponent/HelloComponent";
import CounterComponent from "./1.BasicReact/2.CounterComponent/CounterComponent";
import ConditionalRendering from "./1.BasicReact/3.ConditionalRendering/ConditionalRendering";
import ListComponent from "./1.BasicReact/4.ListComponent/ListComponent";

function App() {
  const student = [
    {
      id: 1,
      name: "utkarsh",
      age: 27,
    },
    {
      id: 2,
      name: "arun",
      age: 12,
    },
    {
      id: 3,
      name: "amit",
      age: 82,
    },
    {
      id: 4,
      name: "ankit",
      age: 20,
    },
  ];

  return (
    // <div className="App">
    // <h2>App </h2>
    // <HelloComponent name={"utkarsh"} age={12} />
    // <HelloComponent name={"ankus"} age={22} />
    // <HelloComponent name={"amit"} age={32} />
    // <HelloComponent name={"sumit"} age={42} />
    // <HelloComponent name={"animesh"} age={52} />
    // </div>

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
    <>
      {/* <h1>App</h1>
      <HelloComponent name={"utkarsh"} age={12} />

      <CounterComponent /> */}

      {/* <ConditionalRendering /> */}
      <ListComponent students={student} />
    </>
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
