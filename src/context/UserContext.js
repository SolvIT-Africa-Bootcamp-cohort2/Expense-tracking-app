import React, { useState, createContext } from "react";

export const UserMainContext = createContext();

function UserContext({ children }) {
  const [token, setToken] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  return (
    <UserMainContext.Provider
      value={{
        token,
        setToken,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </UserMainContext.Provider>
  );
}

export default UserContext;