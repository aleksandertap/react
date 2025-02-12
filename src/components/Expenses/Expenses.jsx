import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");
  const filtereYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Year selected: ${selectedYear}`);
  };

  const showFilteredYear = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filtereYearHandler}
      />
      <ExpensesList expenses={showFilteredYear} />
    </Card>
  );
};

export default Expenses;
