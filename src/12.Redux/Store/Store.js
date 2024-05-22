import { createStore } from "redux";
import CounterReducer from "../ReducerFunction/ReducerFunction";

function store() {
  return createStore(CounterReducer);
}

export default store;
