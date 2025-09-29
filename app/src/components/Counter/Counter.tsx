import React from "react";
import { CounterWrapper, CounterButtons } from "./Counter.styled";

interface CounterProps {
  id: number;
  count: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

const Counter: React.FC<CounterProps> = ({ id, count, onIncrement, onDecrement }) => {

  const handleIncrement = () => onIncrement(id);
  const handleDecrement = () => onDecrement(id);

  return (
    <CounterWrapper>
      <h4>Count: {count}</h4>
      <CounterButtons>
        <button onClick={handleDecrement} disabled={count <= 0}>-</button>
        <button onClick={handleIncrement}>+</button>
      </CounterButtons>
    </CounterWrapper>
  );
};

export default Counter;
