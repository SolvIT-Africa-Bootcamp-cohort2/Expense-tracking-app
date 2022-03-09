import React, { useState, createContext } from "react";

export const UserMainContext = createContext();

function UserContext({ children }) {
  const [token, setToken] = useState(null);
  return (
    <UserMainContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </UserMainContext.Provider>
  );
}

export default UserContext;
