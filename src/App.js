// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { useState } from 'react';
import Expenses from './Compotant/Expenses/Expenses';
import NewExpense from './Compotant/NewExpense/NewExpense';
// import ExpenseItem from './Compotant/ExpenseItem';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(Date.UTC(2020, 14, 7)),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(Date.UTC(2021, 12, 2)),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(Date.UTC(2021, 28, 2)),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(Date.UTC(2021, 12, 5)),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
