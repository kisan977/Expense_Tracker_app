import React from "react";
import "./App.css";
import AddTransaction from "./components/addtransaction/AddTransaction";
import Balance from "./components/balance/Balance";
import IncomeExpense from "./components/incomeExpenses/IncomeExpense";
import TransactionList from "./components/transactionList/TransactionList";
import { GlobalProvider } from "./contextApi/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>Expense Tracker</h1>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
