import { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import Error from "./components/UI/Error.jsx";

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:5005/expenses");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed fetching data");
        }
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed fetching expenses data, please try again later",
        });
        setShowError(true);
      }

      setIsFetching(false);
    };
    getExpenses();
    console.log(expenses);
  }, []);

  console.log(error)
  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpenseHandler = (expense) => {
    const addExpense = async (expense) => {
      try {
        const response = await fetch(
          "http://localhost:5005/add-expense",{
            method: "POST",
            body: JSON.stringify(expense),
            headers: {"Content-type":"application/json"}
          }
        )
        const responseData = await response.json()
        if(!response.ok){
          throw new Error("Failed saving data")
        }
        setExpenses([expense, ...expenses])
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed saving expenses data, please try again."
        })
        setShowError(true)
      }
    }
    addExpense(expense)
  };

  return (
    <div className="App">
      {showError && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} isLoading={isFetching} />
    </div>
  );
};

export default App;
