import React, { useContext } from "react";
import { GlobalContext } from "../../contextApi/GlobalState";
import "./IncomeExpense.css";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="income_expense">
      <div className="income">
        <h2>Income</h2>
        <h4 className="amount">Rs{income}</h4>
      </div>
      <div className="line"></div>
      <div className="expense">
        <h2>Expense </h2>
        <h4 className="amount">Rs{expense}</h4>
      </div>
    </div>
  );
};

export default IncomeExpense;
