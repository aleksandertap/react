import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min='0.01' step='0.01' />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2024-11-12' max='2026-01-31' />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
