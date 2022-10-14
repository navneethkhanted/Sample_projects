import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [newYear, changedYear] = useState("2019");

  function filterValueUpdate(selectedYear) {
    changedYear(selectedYear);
  }

  const filteredItem = props.value.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilter selected={newYear} onFilterValue={filterValueUpdate} />
          <ExpenseChart expenses={filteredItem} />
          <ExpenseList items={filteredItem} />
        </Card>
      </li>
    </div>
  );
}

export default Expenses;
