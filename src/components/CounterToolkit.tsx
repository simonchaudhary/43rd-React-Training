import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { decrement, increment } from "../redux/slices/counter";
import Button from "./Button";

function CounterToolkit() {
  const count = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div className="bg-orange-300 w-fit p-2 flex flex-col items-center">
      <div className="flex items-center gap-x-2">
        <Button label="-" onClick={() => dispatch(decrement())} />

        <h3>{count}</h3>

        <Button label="+" onClick={() => dispatch(increment())} />
      </div>
    </div>
  );
}

export default CounterToolkit;
