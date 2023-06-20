// ComponentA.tsx
import React, { useContext } from "react";
import { MyContext } from "./Contexts";

const ComponentA: React.FC = () => {
  const { data, setData } = useContext(MyContext);

  const handleClick = () => {
    setData("New Value");
  };

  return (
    <div>
      <h2>Component A</h2>
      <p>Data: {data}</p>
      <button onClick={handleClick}>Update Data</button>
    </div>
  );
};

export default ComponentA;
