import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024")
  const filtereYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(`Year selected: ${selectedYear}`)
  }
  

  return (
    <Card className="expenses">
      < ExpensesFilter selectedYear={filteredYear} onFilterChange={filtereYearHandler}/>
      {props.expenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
