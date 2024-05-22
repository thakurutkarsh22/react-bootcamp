export const DEFAAULT_STATE = {
  counter: 100,
  toggle: true,
};

// SHOP KEEPER (REDUCER FUNCTION)
function CounterReducer(state = DEFAAULT_STATE, action) {
  const { type } = action;

  if (type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (type === "RESET") {
    return {
      ...state,
      counter: 0,
    };
  } else {
    return state;
  }
}

export default CounterReducer;
