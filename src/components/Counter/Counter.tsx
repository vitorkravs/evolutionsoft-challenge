import { FaMinus, FaPlus } from "react-icons/fa";

interface CounterProps {
  amount: number;
}

const Counter = ({ amount }: CounterProps) => {
  return (
    <div>
      <button>
        <FaPlus />
      </button>
      <p>{amount}</p>
      <button>
        <FaMinus />
      </button>
    </div>
  );
};

export default Counter;
