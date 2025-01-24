import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

const App = () => {
  const expenses = [
    { date: new Date(2025, 0, 23), title: "New Book", price: 30.99 },
    { date: new Date(2025, 0, 23), title: "New Jeans", price: 99.99 },
  ];

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
