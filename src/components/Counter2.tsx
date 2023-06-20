import React from "react";
import { useSharedData } from "../context/SharedDataContext";

function Counter2() {
  const sharedData = useSharedData();

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {sharedData.count}</p>
      <button onClick={sharedData.increment}>Increment</button>
    </div>
  );
}

export default Counter2;
