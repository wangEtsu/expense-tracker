import "./App.css";

import Expense from "./components/Expenses/Expense";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  // this is the root component of a react app
  // only this component got rendered as a new html page, thus called "SPA"

  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: "10",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "lunch",
      amount: "14",
      date: new Date(2020, 6, 14),
    },
    {
      id: "e3",
      title: "laptop",
      amount: "1400",
      date: new Date(2021, 2, 14),
    },
    {
      id: "e4",
      title: "coffee",
      amount: "3",
      date: new Date(2019, 7, 1),
    },
  ];

  const addExpenseHandler = (expense) =>{
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div className="App">
      {/* have to use uppercase, which indicates its a custom component, if not its an HTML element */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
