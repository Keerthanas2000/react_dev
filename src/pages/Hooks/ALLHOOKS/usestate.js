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


// asynchronous state update
// console.log will not update immediately
//overwriting insted of updating 

// setUser({name:"Keerthana"})

// use setUser(prev=>({...prev, name:"Keerthana"}))

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

