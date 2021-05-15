import React from 'react';

import { Button } from '../components/common';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrement, increment } from '../store/counter';
const index = () => {
  const counter = useAppSelector(({ counter }) => counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Shop</h1>
      <h1>Counter: {counter}</h1>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(increment())}>+</Button>
    </div>
  );
};

export default index;
