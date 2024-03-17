"use client";

import "./styles.scss";

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
    <div className="counter">
      <button onClick={addToCounter} className="counter-btn-add">
        <FaPlus />
      </button>
      <p className="count-value">{count}</p>
      <button onClick={subtractFromCounter} className="counter-btn-subtract">
        <FaMinus />
      </button>
    </div>
  );
};

export default Counter;
