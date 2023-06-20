// context.tsx
import React, { createContext, useState } from "react";

interface MyContextType {
  data: string;
  setData: (value: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyProvider: React.FC = ({ children }: any) => {
  const [data, setData] = useState("Initial Value");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
