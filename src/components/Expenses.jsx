import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "./Card.jsx";
import './Expenses.css'

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
