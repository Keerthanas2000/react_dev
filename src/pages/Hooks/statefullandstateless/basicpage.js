import React, { useState, useEffect } from 'react';
import Greeting from './Greeting';
import CounterDisplay from './CounterDisplay';

function React9() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setName("Keerthana");
  }, []); 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ padding: "20px" }}>
      <Greeting name={name} />
      <CounterDisplay count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default React9;
