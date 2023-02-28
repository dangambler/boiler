import React from 'react';

import { counterSlice } from '../../redux/slices';
import { useDispatch } from 'react-redux';

const CounterMutator = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.decrement());
        }}>
        -
      </button>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.increment());
        }}>
        +
      </button>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.incrementByAmount(10));
        }}>
        +10
      </button>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.incrementByAmount(-10));
        }}>
        -10
      </button>
    </>
  );
};

export default CounterMutator;
