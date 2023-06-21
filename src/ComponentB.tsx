// ComponentA.tsx
import React, { useContext } from "react";
import { User, UserContext } from "./contexts/Contexts";

const ComponentB = () => {
  const { fullName, setFullName } = useContext(UserContext) as User;

  console.log("file", fullName);

  const handleClick = () => {
    setFullName("Component B value");
  };

  return (
    <div className="p-4 bg-amber-300">
      <h2>Component B</h2>
      <p>Data: {fullName}</p>

      <button onClick={handleClick}>update</button>
    </div>
  );
};

export default ComponentB;
