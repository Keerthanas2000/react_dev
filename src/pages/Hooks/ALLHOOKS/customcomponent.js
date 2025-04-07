// 📁 CounterComponent.js
import React from "react";
import useCounter from "./customhook";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(5); 

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default CounterComponent;
