import Exepenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 294.67, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 255.33, date: new Date(2021, 8, 28) },
  { id: 'e4', title: 'New Desk (wooden)', amount: 450, date: new Date(2021, 5, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Exepenses items={expenses} />
    </div>
  );
};

export default App;