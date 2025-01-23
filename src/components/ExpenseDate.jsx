import React from "react";

const ExpenseDate = (props) => {
  const { date } = props;
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return (
    <div>
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
