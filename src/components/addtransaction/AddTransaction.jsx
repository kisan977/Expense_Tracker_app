import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contextApi/GlobalState";
import "./AddTransaction.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const AddTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div className="addTransaction">
      <h2>Add New Transaction</h2>
      <div className="underline"></div>
      <div className="box">
        <form className="form">
          <div className="input-container">
            <input
              type="text"
              required=""
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <label>Text</label>
          </div>
          <div className="input-container">
            <input
              type="number"
              required=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label>Amount</label>
          </div>
          <button type="button" className="btn" onClick={AddTransaction}>
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
