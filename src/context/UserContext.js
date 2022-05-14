import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        username,
        email,
        password,
        isLoggedIn,
        setUsername,
        setEmail,
        setPassword,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
