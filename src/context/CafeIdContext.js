import React, { createContext, useContext, useState } from "react";

const IdContext = createContext();

export const useCafeId = () => useContext(IdContext);

export default function IdProvider({ children }) {
  const [cafeId, setCafeId] = useState("");

  return (
    <IdContext.Provider
      value={{
        cafeId,
        setCafeId,
      }}
    >
      {children}
    </IdContext.Provider>
  );
}
