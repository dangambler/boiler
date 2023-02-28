import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CounterDisplay: React.FC = () => {
  const selector = useSelector((state: RootState) => state.counter);

  return <p>Counter Value: {selector.value}</p>;
};

export default CounterDisplay;
