import React from "react";
import { MyProvider } from "./Contexts";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  return (
    <MyProvider>
      <div>
        <h1>Context API Example</h1>
        <ComponentA />
        <ComponentB />
      </div>
    </MyProvider>
  );
}

export default App;
