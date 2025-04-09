import React from "react";

// create class component named Lcycleclass it extends (inherits) all functionality of react  component
class Lcycleclass extends React.Component {
  // constructor is the first method called once the component is created . props are passed from parent component . constructor is used to initalise state and props
  constructor(props) {
    super(props);

    // this is required when i  class extends another class     and to call constructor of parent class

    // calls the constructor of parent class and access this.props

    // A Real-World Analogy:
    // Let’s say:

    // Component is like your mom’s kitchen

    // You want to cook something in your own kitchen (App)

    // But your kitchen is based on your mom’s kitchen design

    // So you must first go to your mom's kitchen (super(props)) to set up the essentials before you start working in your own.

    console.log("Constructor: class is being created");

    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState)
  {
      // static lifecycle  method that runs before rendering, on mounting and on updates

      // to update satte based on props

      // it recieves nextProps, and prevstate

      console.log('getDerivedStateFromProps: Props are being updated');
      return null; // usually used to update state based on props
  }

  componentDidMount()
  {
      console.log("componentdidmount: component is rendered to the DOM")
  }

  
  shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate: Deciding whether to re-render');
      return true; // return false to prevent re-render
    }  render() {
      console.log('render: Component is being rendered');
      return (
        <div>
          <h1>Full Lifecycle Methods Demo</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment</button>
        </div>
      );
    }
  
    handleClick = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
}

export default Lcycleclass;
