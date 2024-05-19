import { useReducer, useState } from "react";
import reducerFunctionCounter from "./reducers/reducerFunctoion";
import {
  DecrementAction,
  IncrementAction,
  ResetAction,
} from "./actionObject/actionObject";

const DEFAULT_STATE = {
  name: "utkarsh",
  counter: 0,
  age: 25,
};

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducerFunctionCounter, DEFAULT_STATE);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div>{state.counter}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => {
              dispatch(IncrementAction);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(DecrementAction);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(ResetAction);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default UseReducerExample;
