import React, { useContext } from "react";
import { GlobalContext } from "../../contextApi/GlobalState";
import "./Balance.css";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h4 className="amount">Rs{total}</h4>
    </div>
  );
};

export default Balance;
