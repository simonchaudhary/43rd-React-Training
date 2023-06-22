import React from "react";
import useCounter from "../hooks/useCounter";
import Button from "./Button";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Text from "./Text";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { decrement, increment } from "../redux/slices/counter";

interface ICounter {
  initialValue?: number;
}

function CounterToolkit(props: ICounter) {
  const { initialValue = 0 } = props;

  const count = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div className="bg-orange-300 w-fit p-2 flex flex-col items-center">
      {/* <Text text={`Initial value is ${initialValue}`} /> */}
      dd
      <div className="flex items-center gap-x-2">
        <Button label="-" onClick={() => dispatch(decrement())} />

        <h3>{count}</h3>

        <Button label="+" onClick={() => dispatch(increment())} />
      </div>
    </div>
  );
}

export default CounterToolkit;
