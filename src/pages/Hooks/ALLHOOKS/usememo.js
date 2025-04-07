import React, { useState, useMemo } from "react";

function UseMemofunc() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    console.log("Slow function running...");
    for (let i = 0; i < 1e9; i++) {} 
    return num * 2;
  };

  const doubled = useMemo(() => slowFunction(count), [count]);

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    margin: "10px",
  };

  return (
    <div style={themeStyle}>
      <h3>useMemo Example</h3>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <p>Result: {doubled}</p>
    </div>
  );
}
export default UseMemofunc