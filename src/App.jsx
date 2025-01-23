import ExpenseItem from "./components/ExpenseItem.jsx";

const App = () => {
  const expenses = [
    { date: new Date(2025, 0, 23), title: "New Book", price: 30.99 },
    { date: new Date(2025, 0, 23), title: "New Jeans", price: 99.99 },
  ];

  return (
    <div className="App">
      <ExpenseItem data={expenses[0]} />
      <ExpenseItem data={expenses[1]} />
    </div>
  );
};

export default App;
