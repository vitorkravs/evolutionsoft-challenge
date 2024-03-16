"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CounterProps {
  amount: number;
}

const Counter = ({ amount }: CounterProps) => {
  const [count, setCount] = useState(amount);

  const addToCounter = () => {
    setCount((amount) => amount + 1);
  };

  const subtractFromCounter = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((amount) => amount - 1);
    }
  };

  return (
    <div>
      <button onClick={addToCounter}>
        <FaPlus />
      </button>
      <p>{count}</p>
      <button onClick={subtractFromCounter}>
        <FaMinus />
      </button>
    </div>
  );
};

export default Counter;
