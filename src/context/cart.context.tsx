import React, { createContext, useContext, useState } from "react";

type MyContextType = {
  count: number;
  increment: () => void;
};

// Provide a default value (usually something minimal or undefined)
const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook for convenience
export const useMyContext = () => {
  const ctx = useContext(MyContext);
  if (!ctx) throw new Error("useMyContext must be used within a MyProvider");
  return ctx;
};
