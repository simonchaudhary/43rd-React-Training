// ComponentB.tsx
import React, { useContext } from "react";
import { MyContext, MyContextType } from "./Contexts";
import Button from "./components/Button";

const ComponentB: React.FC = () => {
  const { data, setData } = useContext(MyContext) as MyContextType;

  console.log("file", data);

  const handleClick = () => {
    setData("Component B value");
  };

  return (
    <div className="p-4 bg-blue-400">
      <h2>Component B</h2>
      <p>Data: {data}</p>

      <Button onClick={handleClick} label="Update" />
    </div>
  );
};

export default ComponentB;
