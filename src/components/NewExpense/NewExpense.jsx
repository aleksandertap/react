import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditForm(false);
  };

  const editingHandler = () => {
    setEditForm(true);
  };
  const cancelEditingHandler = () => {
    setEditForm(false);
  };
  return (
    <div className="new-expense">
      {!editForm ? (
        <button onClick={editingHandler}>Add New Expense</button>
      ) : (
        <>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
          <button onClick={cancelEditingHandler}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default NewExpense;
