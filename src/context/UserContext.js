import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favs, setFavs] = useState({});
  const [uid, setUid] = useState("");
  const [userLoc, setUserLoc] = useState(null);

  return (
    <UserContext.Provider
      value={{
        username,
        email,
        password,
        isLoggedIn,
        favs,
        uid,
        userLoc,
        setUserLoc,
        setUsername,
        setEmail,
        setPassword,
        setIsLoggedIn,
        setFavs,
        setUid,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
