import React, { useState, createContext } from "react";

export const UserMainContext = createContext();

function UserContext({ children }) {
  const [token, setToken] = useState(null);
  const [activeTab, setActiveTab] = useState({ id: null, name: null });
  const [categories, setCategories] = useState([]);
  const [moneyAccounts, setMoneyAccounts] = useState([]);
  const [progressDeletion, setProgressDeletion] = useState([]);
  const [deletedTranscations, setDeletedTransactions] = useState([]);
  return (
    <UserMainContext.Provider
      value={{
        token,
        setToken,
        activeTab,
        setActiveTab,
        categories,
        setCategories,
        moneyAccounts,
        setMoneyAccounts,
        progressDeletion,
        setProgressDeletion,
        deletedTranscations,
        setDeletedTransactions,
      }}
    >
      {children}
    </UserMainContext.Provider>
  );
}

export default UserContext;
