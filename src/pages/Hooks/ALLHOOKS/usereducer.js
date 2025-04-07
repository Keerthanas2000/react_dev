// useReducer is an alternative to useState for managing state. It's especially useful when:

// The state has multiple sub-values (like an object).

// The next state depends on the previous state.



// const [state, dispatch] = useReducer(reducer, initialState);
// reducer: A function that takes (state, action) and returns a new state.

// dispatch: A function to send actions to the reducer.


import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Usereducerfunc() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>useReducer Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default Usereducerfunc;


///usecase

//Shopping cart (add, remove, clear items)

