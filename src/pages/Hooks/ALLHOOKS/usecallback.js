//useCallback is a React Hook that memoizes a callback function, so it doesn’t get re-created on every render — unless its dependencies change.


import { useCallback } from "react";

function Parent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function Usecallbackfunc() {
  const handleClick = useCallback(() => alert("Clicked!"), []);

  return (
    <div>
      <Parent onClick={handleClick} />
    </div>
  );
}

export default Usecallbackfunc;


// Real-world Feature	Role of useCallback
// Chat app	Prevent re-renders on message input/button
// Shopping cart	Optimize performance for dynamic lists
// Dashboards	Keep data-fetch interval function stable
// Filters/Search bars	Avoid unnecessary renders during frequent typing