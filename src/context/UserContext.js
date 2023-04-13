import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [email, setEmail] = useState("");
  const [favs, setFavs] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("");
  const [userLoc, setUserLoc] = useState(null);
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider
      value={{
        email,
        favs,
        isLoggedIn,
        password,
        uid,
        userLoc,
        username,
        setEmail,
        setFavs,
        setIsLoggedIn,
        setPassword,
        setUid,
        setUserLoc,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
