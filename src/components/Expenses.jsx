import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import './Expenses.css'

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  );
};

export default Expenses;
