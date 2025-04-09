// Counter.js


// useSelector reads the Redux state.

// useDispatch lets us send (dispatch) actions.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector((state) => state.count); // get state from store
  const dispatch = useDispatch(); // get dispatch function

  return (
    <div>
      <h2>Redux Counter (Hooks)</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
