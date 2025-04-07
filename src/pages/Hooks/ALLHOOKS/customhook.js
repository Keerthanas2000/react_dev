// A Custom Hook is a JavaScript function that starts with use and can use other React hooks inside it.

// It allows you to reuse stateful logic (like fetching data.) without repeating code across components.

// 📁 useCounter.js
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
