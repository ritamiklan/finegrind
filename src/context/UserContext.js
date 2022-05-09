import React, { createContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ name: "Jari" }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
