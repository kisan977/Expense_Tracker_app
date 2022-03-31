import React, { useContext } from "react";
import "./TransactionList.css";

import { GlobalContext } from "../../contextApi/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="transaction_list">
      <h2>History</h2>
      <div className="underline"></div>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
