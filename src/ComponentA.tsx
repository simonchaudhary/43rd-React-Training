// ComponentA.tsx
import React, { useContext } from "react";
import { MyContext, MyContextType } from "./Contexts";
import Button from "./components/Button";

const ComponentA: React.FC = () => {
  const { data, setData } = useContext(MyContext) as MyContextType;

  console.log("file", data);

  const handleClick = () => {
    setData("Component A value");
  };

  return (
    <div className="p-4 bg-amber-300">
      <h2>Component A</h2>
      <p>Data: {data}</p>

      <Button onClick={handleClick} label="Update" />
    </div>
  );
};

export default ComponentA;
