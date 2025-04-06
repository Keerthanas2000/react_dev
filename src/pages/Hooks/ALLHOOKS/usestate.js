// Usestate lets u add state to my functional components

import { useState } from "react";

function UsestateExample() {
  const [Count, SetCount] = useState(0);
  return (
    <>
      <p> YOU CLICKED button {Count} Times</p>

      <button onClick={() => SetCount(Count + 1)}>Click button</button>
    </>
  );
}

export default UsestateExample;




//simple use case
// toggle button

// const [isOn, setIsOn] = useState(false);
// <button onClick={() => setIsOn(!isOn)}>
//   {isOn ? 'ON' : 'OFF'}
// </button>


// // use in form 

// const [name, setName] = useState("");
// <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

//  hide and show ele

// const [show, setShow] = useState(false);
// <button onClick={() => setShow(!show)}>Toggle</button>
// {show && <p>This is visible now!</p>}

// `useState` returns an array: `[state, setState]`
// An array with current state and a function to update it

//// asynchronous state update
// console.log will not update immediately
//overwriting insted of updating 

// setUser({name:"Keerthana"})
// You must copy the previous object using spread syntax to avoid losing other properties. 
// use setUser(prev=>({...prev, name:"Keerthana"}))

// best practise to do heavy computations using usestate


// When you write:


// const [value, setValue] = useState(heavyFunction());
//  The heavyFunction() gets executed every time the component renders — even if the state doesn’t change.

// That’s bad for performance, especially if heavyFunction is slow.

// ✅ The Right Way (Lazy Initialization):

// const [value, setValue] = useState(() => heavyFunction());
// In this form:

// You're passing a function, not its result.

// React calls your function only once, during the initial render.

// This saves performance because it doesn’t recompute on every render.



