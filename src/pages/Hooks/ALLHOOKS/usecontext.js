//AbortController 

//useContext lets you access data from a React Context without passing props manually at every level.

// It helps in prop drilling situations (when you want to pass data from top to deep components).

//
// Use Cases
// Theme switching (light/dark mode)

// Authentication data (logged-in user info)

// Language/Localization (English, French, etc.)

// Sidebar open/close status across components

// Form context for wizard/multi-step forms

// Component re-renders: Any component using useContext will re-render when the context value changes — even if it doesn’t need to.

// You can’t use useContext outside the Provider — it will return undefined.


//When you create a context using:

// const ThemeContext = createContext("light");
// React automatically gives you a Provider component as a property of that context.

// ThemeContext.Provider
// This Provider is used to set the value for the context, and all components inside it can access that value using useContext.

//In your code:

// const ThemeContext = createContext("light");
// Here "light" is the default value.

// Since you didn't wrap your component with <ThemeContext.Provider>, it will use the default value — which is fine for now.

// But in real apps, you'll often want to control the context value (like switching from "light" to "dark" based on user action). For that, you must use the Provider like this:


// import { createContext, useContext } from "react";

// const ThemeContext = createContext("light");

// function UseContextfunc() {
//   const theme = useContext(ThemeContext);
//   return (
//     <>
//       <p>3 -----useContext</p>
//       <p>Current Theme: {theme}</p>
//     </>
//   );
// }

// function App() {
//   return (
//     // 🔥 Wrap with Provider and set the value here
//     <ThemeContext.Provider value="dark">
//       <UseContextfunc />
//     </ThemeContext.Provider>
//   );
// }

// export default App;
// 🔄 Without Provider:
// You get the default value: "light"

// 🔄 With Provider:
// You get the provided value: "dark" (or whatever you pass)

// import { createContext, useContext } from "react";

// const ThemeContext = createContext("light");

// function UseContextfunc() {
//   const theme = useContext(ThemeContext);
//   return(

//   <>
//     {" "}
//     <p>3 -----useContext</p> <p>Current Theme: {theme}</p>
//   </>)
// }

// export default UseContextfunc;
import React, { createContext, useContext, useState } from "react";
import '../ALLHOOKS/App.css';

// 1. Create context
const ThemeContext = createContext();

// 2. Component to consume context
function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h2>useContext Theme Toggle</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// 3. Main component wrapping with Provider
function UseContextfunc() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggler />
    </ThemeContext.Provider>
  );
}

export default UseContextfunc;
