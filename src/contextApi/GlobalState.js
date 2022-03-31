import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// intial state transactions

const intialState = {
  transactions: [],
};

// createContext

export const GlobalContext = createContext(intialState);

// for using this we wrap it with provider or provide garxa app ma vako com
// ponent lai data

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
