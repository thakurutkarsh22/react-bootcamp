import { useDispatch, useSelector } from "react-redux";
import { DecrementAction, IncrementAction } from "./Action/actionObjects";

function ReduxApp() {
  // Retrieve the data from the Redux store.
  const counter = useSelector((store) => store?.counter);

  //   To send an action to the Redux store (reducer function ) we need dispatch

  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux App</h1>

      <div>
        <button
          onClick={() => {
            dispatch(IncrementAction);
          }}
        >
          +
        </button>
        <p>COunter: {counter}</p>
        <button
          onClick={() => {
            dispatch(DecrementAction);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default ReduxApp;
