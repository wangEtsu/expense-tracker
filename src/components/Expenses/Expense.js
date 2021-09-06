import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

function Expense(props) {
  console.log("new list of items");
  console.log(props.items);
  const [filteredYear, setFilteredYears] = useState("2020");

  // this is triggered by child component: ExpenseFilter.js
  const filterChangeHandler = (selectedYear) => {
    setFilteredYears(selectedYear);
  };

  // filter an new array
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
