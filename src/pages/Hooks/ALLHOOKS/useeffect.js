//Use effect is to run side effects in functional components

import React, { useState, useEffect } from "react";

function UseeffectFunc() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  //   setCount(count + 1); 
  // });

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);

  return (
    <div>
      <p>-UseEffect</p>
      <p>Times {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseeffectFunc;


// it replaces    class componennt methods  lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount


// missing dependency can cause infinite loops

// we cannot direct async useeffect effectively put inside


// use case:
//component mounting, window resize , save userdata in localstorage

// 1. What happens if you omit the dependency array?
// useEffect will run after every render, potentially leading to performance issues or infinite loops.

// 2. Why shouldn’t you make useEffect directly async?
// useEffect expects a cleanup function or undefined, not a Promise. So, make the async function inside the effect and call it.

// 3. How can you prevent infinite loops in useEffect?
// Properly list all state/props the effect depends on in the dependency array.


// 5. How to skip running useEffect on the first render?

// const isFirstRun = useRef(true);

// useEffect(() => {
//   if (isFirstRun.current) {
//     isFirstRun.current = false;
//     return;
//   }
// }, [someState]);


// 4. When does the cleanup function run?
// It runs before the component unmounts or before the effect re-runs due to dependency change.


// useEffect(() => {
//       window.addEventListener("resize", () => console.log("resized"));
//     }, []);
//     This will keep adding more listeners every time the component mounts — BAD!
    
    
// useEffect(() => {
//       const handleResize = () => console.log("resized");
//       window.addEventListener("resize", handleResize);
    
//       return () => {
//         // Cleanup function
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []);
//     So in short:
    
//     Cleanup = "Undo" what you did in the effect when the component is destroyed or about to re-run the effect."



// useEffect itself can’t be async directly. It expects a synchronous function that can optionally return a cleanup function.


// useEffect(async () => {
//   const res = await fetchData(); // This causes a warning
// }, []);
// You define an async function inside the useEffect, and then call it.

// useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch("https://api.example.com/data");
//     const json = await res.json();
//     console.log(json);
//   };

//   fetchData();
// }, []);

// Because the main useEffect function should not return a Promise, but you can use async inside it.

// Combine Async + Cleanup
// Example: Suppose we fetch some data and also set up a timer that we clean up.


// useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch("https://api.example.com/data");
//     const data = await res.json();
//     console.log(data);
//   };

//   fetchData();

//   const intervalId = setInterval(() => {
//     console.log("Running interval...");
//   }, 1000);

//   return () => {
//     clearInterval(intervalId); // Cleanup timer
//     console.log("Cleanup done!");
//   };
// }, []);
