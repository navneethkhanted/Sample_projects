import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  const expenseValue = props.items;
  if (expenseValue.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {expenseValue.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amount={expenses.amount}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
