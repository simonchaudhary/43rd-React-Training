import React from "react";
import useCounter from "../hooks/useCounter";
import Button from "./Button";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Text from "./Text";

interface ICounter {
  initialValue?: number;
}

function Counter(props: ICounter) {
  const { initialValue = 0 } = props;

  const { counter, increment, decrement } = useCounter(initialValue);

  useDocumentTitle(`Count is ${counter}`);

  return (
    <div className="bg-orange-300 w-fit p-2 flex flex-col items-center">
      <Text text={`Initial value is ${initialValue}`} />

      <div className="flex items-center gap-x-2">
        <Button label="-" onClick={decrement} />

        {counter}

        <Button label="+" onClick={increment} />
      </div>
    </div>
  );
}

export default Counter;
