import React, { useContext, useEffect, useState } from "react";
import "../../../../styles/manageAccounts.scss";
import Axios from "axios";
import Accounts from "../../../placeholders/Accounts";
import { backendUrl } from "../../../../controller/Config";
import { UserMainContext } from "../../../../context/UserContext";
import AccountItem from "./AccountItem";

function ManageAccounts() {
  const context = useContext(UserMainContext);
  const [accounts, setAccounts] = useState([]);
  const [isLoadingAccounts, setIsLoadingAccounts] = useState(true);

  const fetchAccounts = () => {
    Axios.get(backendUrl + "/accounts", {
      headers: {
        Authorization: `Bearer ${context.token}`,
      },
    })
      .then((res) => {
        if (res.data.accounts) {
          console.log(res.data.accounts);
          context.setMoneyAccounts(res.data.accounts);
          setIsLoadingAccounts(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoadingAccounts(false);
      });
  };
  useEffect(() => {
    let sub = true;
    if (sub) {
      fetchAccounts();
    }
    return () => {
      sub = false;
    };
  }, []);
  return (
    <div className="main-container">
      {isLoadingAccounts ? (
        <Accounts />
      ) : (
        <div>
          <h3>Money Accounts</h3>
          {context.moneyAccounts.length > 0 && (
            <div className="card mt-3">
              <div className="card-body">
                <table className="w-100">
                  {context.moneyAccounts.map((account, index) => (
                    <AccountItem
                      key={index}
                      account={account}
                      fetchAccounts={fetchAccounts}
                    />
                  ))}
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ManageAccounts;
