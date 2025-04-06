// hooks are functions that lets us to hook into react features like state and lifecycle methods without using class component

// Class component using state and lifecycle method (before hooks)
import React, { Component ,useState, useEffect} from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { Count: 0 }; // Initial state
  }

  // Lifecycle method runs once after component is mounted
  componentDidMount() {
    console.log("Component mounted");
  }

  render() {
    return (
      <>
        <h2>Count: {this.state.Count}</h2>
        <button onClick={() => this.setState({ Count: this.state.Count + 1 })}>
          Increase Count
        </button>
      </>
    );
  }
}

// Functional component using hooks instead of class

function    FuncCounter() {
  const [count, setCount] = useState(0); // useState for state

  useEffect(() => {
    console.log("Component mounted");
  }, []); // useEffect for lifecycle (like componentDidMount)

  return (
    <>
      <h2> Func Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </>
  );
}

export   { Counter,FuncCounter};

