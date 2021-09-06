import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
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
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expense;
