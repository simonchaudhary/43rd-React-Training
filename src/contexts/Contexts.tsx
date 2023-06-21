// // context.tsx
// import { ReactElement, ReactNode, createContext, useState } from "react";

// export interface MyContextType {
//   data: string;
//   setData: (value: string) => void;
// }

// const MyContext = createContext<MyContextType | undefined>(undefined);

// interface MyProviderProps {
//   children: JSX.Element;
// }

// const MyProvider = (props: MyProviderProps) => {
//   const { children } = props;

//   const [data, setData] = useState("Initial Value");

//   return (
//     <MyContext.Provider value={{ data, setData }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export { MyContext, MyProvider };

import { createContext, useState } from "react";

export interface User {
  fullName: string;
  setFullName: (value: string) => void;
}

const UserContext = createContext<User | undefined>(undefined);

interface MyProviderProps {
  children: JSX.Element[];
}

const UserProvider = (props: MyProviderProps) => {
  const { children } = props;

  const [fullName, setFullName] = useState("Initial Value");

  return (
    <UserContext.Provider value={{ fullName, setFullName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
