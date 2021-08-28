import logo from "./logo.svg";
import "./App.css";

import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div className="App">
      {/* have to use uppercase, which indicates its a custom component, if not its an HTML element */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
