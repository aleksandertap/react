import './ExpenseDate.css'
import React from "react";

const ExpenseDate = (props) => {
  const { date } = props;
  const day = new Date(date).toLocaleString("en-US", { day: "2-digit" });
  const month = new Date(date).toLocaleString("en-US", { month: "long" });
  const year = new Date(date).getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
