import { useState, useEffect} from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

const DUMMY_EXPENSES = [
  { id: "id1", date: new Date(2023, 7, 19), title: "New Book", price: 30.99 },
  { id: "id2", date: new Date(2025, 2, 23), title: "New Jeans", price: 99.99 },
  { id: "id3", date: new Date(2025, 0, 31), title: "New Bag", price: 139.99 },
];

const App = () => {
  const [expenses, setExpenses] = useState(()=>{
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'))
    return expensesFromLS || []
  })

  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
