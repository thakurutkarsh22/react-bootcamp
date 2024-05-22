import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloComponent from "./1.BasicReact/1.HelloComponent/HelloComponent";
import CounterComponent from "./1.BasicReact/2.CounterComponent/CounterComponent";
import RoutingApp from "./10.RoutingApp/RoutingApp";
import { BrowserRouter } from "react-router-dom";
import ContextAPIReactApp from "./11.ContextApi/ContextAPIReactApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>

  // <BrowserRouter>
  //   <RoutingApp />
  // </BrowserRouter>

  <ContextAPIReactApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
