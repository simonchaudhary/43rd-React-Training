import { useState } from "react";

interface UseCounterReturn {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

function useCounter(initialValue: number, increaseValue = 1): UseCounterReturn {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + increaseValue);
  };

  const decrement = () => {
    setCounter((prev) => prev - increaseValue);
  };

  return { counter, increment, decrement };
}

export default useCounter;
