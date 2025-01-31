import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");
  const filtereYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Year selected: ${selectedYear}`);
  };

  const showFilteredYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>

  if(showFilteredYear.length > 0){
    expensesContent = showFilteredYear.map((expense) => {
      return <ExpenseItem key={expense.id} data={expense}/>})
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filtereYearHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
