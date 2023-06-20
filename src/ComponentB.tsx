// ComponentB.tsx
import React, { useContext } from "react";
import { MyContext } from "./Contexts";

const ComponentB: React.FC = () => {
  const { data } = useContext(MyContext)!;

  return (
    <div>
      <h2>Component B</h2>
      <p>Data: {data}</p>
    </div>
  );
};

export default ComponentB;
