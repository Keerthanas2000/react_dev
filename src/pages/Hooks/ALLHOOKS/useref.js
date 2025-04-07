import React, { useRef } from "react";



// Access and modify DOM elements (like input fields, buttons, or divs)

// Store mutable values that don’t trigger re-renders when updated

// Keep references to previous values without causing a component to re-render
// is a hook that returns a mutable object that persists for the lifetime of the component.
function UseReffunc() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  };

//   const countRef = useRef(0);

// useEffect(() => {
//   countRef.current += 1;
//   console.log("Render count:", countRef.current);
// });


// Use Case	Description
// Focus an input	inputRef.current.focus()
// Store previous value	Compare prev vs current state
// Track interval/timer	Store setInterval/setTimeout references
// Avoid re-renders	Hold values without triggering render

  return (
    <div>

      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>



      
    </div>
  );
}

export default UseReffunc;
