import React, { useContext } from "react";
import { GlobalContext } from "../../contextApi/GlobalState";
import "./TransactionList.css";

const Transaction = ({ text, amount, id }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      <span className="text">{text}</span>
      <h3 className="amounts">
        {sign}Rs.{Math.abs(amount)}
      </h3>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
