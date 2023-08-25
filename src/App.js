 import React, {useState} from 'react';
 import NewExpense from './components/NewExpense/NewExpense';
 import Expenses from './components/Expenses/Expenses'; 

 const initialExpenses = [
  {
    id: 'e1',
    title: 'Books',
    amount: 2000,
    date: new Date(2023, 6, 14),
  },
  {
    id: 'e2',
    title: 'Transport',
    amount: 4000,
    date: new Date(2023, 6, 20),
  },
  {
    id: 'e3',
    title: 'Food',
    amount: 3000,
    date: new Date(2023, 6, 22),
  },
  {
    id: 'e4',
    title: 'Printing',
    amount: 1000,
    date: new Date(2023, 6, 25),
  },
];

const App = () => {
const [expenses, setExpenses] =useState(initialExpenses); 

  const addExpenseHandler = expense => {
   setExpenses((prevExpenses) =>{
    return [expense, ...prevExpenses];
   });
};

  return (
    <div>
     <NewExpense addExpensePointer = {addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  );
};

export default App;
