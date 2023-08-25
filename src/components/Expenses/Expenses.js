import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import '../Expenses/Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpensesChart';

//Displays the year filter, the Expenses Chart and items
const Expenses =(props) => {
 const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    //console.log(filteredYear);
  };
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
    <ExpenseChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
    );
};

export default Expenses;