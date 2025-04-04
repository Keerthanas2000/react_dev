import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Sidebardata from "./Sidebar";


function App() {
  return (
    <div className="App">
      {/* Sidebar Navigation */}
      <div className="sidebar-container">
        <ul className="nav-list">
          {Sidebardata.map((i, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                to={i.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span>{i.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content">
        <Routes>
          {/* Default Home Route */}
          <Route path="/" element={<h1>Welcome to React Dashboard</h1>} />
          {/* The <Routes> component inside the .content div is responsible for handling the URL changes and rendering the corresponding components dynamically. */}

          {/* Dynamic Route Handling */}
          {Sidebardata.map((i, index) => (
            <Route
              key={index}
              path={i.path}
              element={<i.component Mainpage={`Navigated to ${i.title}`} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;

// # Understanding Props in React

// ## 1. Sending Props
// Props allow you to pass data from a parent component to a child component.

// ```jsx
// // Sending a variable as a prop
// let name = "Keerthana";
// root.render(<Propsexample name={name} />);
// ```

// You can also render elements directly:

// ```jsx
// let ele = <h1>Welcome to React.js {name}</h1>;
// root.render(ele);
// ```

// Fragments allow multiple elements to be returned:

// ```jsx
// let el = (
//   <>
//     This is a fragment
//     <h1>Welcome to React.js {name}</h1>
//     <p>Welcome to React.js {name}</p>
//   </>
// );
// root.render(el);
// ```

// ---

// ## 2. Destructuring Props
// Instead of accessing `props.name`, we can destructure props for cleaner code:

// ```jsx
// function Greeting({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }
// ```

// ---

// ## 3. Props with Multiple Values
// Props can pass multiple values to a child component.

// ### Parent Component (App.js):
// ```jsx
// function App() {
//   return <UserCard name="Keerthana" age={25} country="India" />;
// }
// ```

// ### Child Component (UserCard.js):
// ```jsx
// function UserCard({ name, age, country }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//       <p>Country: {country}</p>
//     </div>
//   );
// }
// ```

// **Output:**
// ```
// Keerthana
// Age: 25
// Country: India
// ```

// ---

// ## 4. Props with Default Values
// If a prop is missing, we can provide a default value.

// ```jsx
// function Greeting({ name = "Guest" }) {
//   return <h1>Hello, {name}!</h1>;
// }
// ```
// If `name` is not passed, it defaults to "Guest".

// ---

// ## 5. Passing Arrays & Objects as Props
// Props can also pass arrays or objects.

// ### Passing an Array

// ```jsx
// function App() {
//   const hobbies = ["Reading", "Coding", "Gaming"];
//   return <UserHobbies hobbies={hobbies} />;
// }

// function UserHobbies({ hobbies }) {
//   return (
//     <ul>
//       {hobbies.map((hobby, index) => (
//         <li key={index}>{hobby}</li>
//       ))}
//     </ul>
//   );
// }
// ```

// **Output:**
// ```
// - Reading
// - Coding
// - Gaming
// ```

// ---

// ## 6. Passing Functions as Props
// Props can also pass functions from parent to child.

// ### Parent Component:
// ```jsx
// function App() {
//   const showMessage = () => {
//     alert("Button Clicked!");
//   };

//   return <Button handleClick={showMessage} />;
// }
// ```

// ### Child Component:
// ```jsx
// function Button({ handleClick }) {
//   return <button onClick={handleClick}>Click Me</button>;
// }
// ```

// When the button is clicked, `showMessage()` runs.

// ---

// ## Additional Props Concepts

// ### 7. Conditional Rendering with Props
// Props can be used to conditionally render UI elements.

// ```jsx
// function StatusMessage({ isLoggedIn }) {
//   return <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>;
// }
// ```

// ---

// ### 8. Passing Styled Components as Props
// You can pass styled elements as props for dynamic rendering.

// ```jsx
// function Highlight({ children, color }) {
//   return <span style={{ color: color }}>{children}</span>;
// }

// function App() {
//   return <Highlight color="red">This is highlighted text!</Highlight>;
// }
// ```

// ---

// ### 9. Using PropTypes for Type Checking
// `PropTypes` can validate the expected types of props.

// ```jsx
// import PropTypes from 'prop-types';

// function UserCard({ name, age }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// UserCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number
// };
// ```

// ---

// ### 10. Passing JSX Elements as Props
// You can pass JSX components as props for more flexibility.

// ```jsx
// function Card({ title, content }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{content}</p>
//     </div>
//   );
// }

// function App() {
//   return <Card title="React Props" content={<strong>Props make components reusable!</strong>} />;
// }
// ```

// ---

// conditional rendering

// function Greeting({ isMorning }) {
//   return <h2>{isMorning ? "Good Morning!" : "Good Evening!"}</h2>;
// }

// export default function App() {
//   return <Greeting isMorning={true} />;
// }

// {hasMessages && <p>You have new messages!</p>}

// ## Conclusion
// Props are fundamental to React and allow you to pass dynamic data, functions, and even JSX elements between components. Using them effectively enhances component reusability and maintainability.
