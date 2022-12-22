import React,{useState} from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses=(props)=>{

  

    const [filteredYear,setfilteredYear]=useState('2020');
 const filterChangeHAndler=selectedYear=>{
  setfilteredYear(selectedYear);
 }
 
 const FilteredExpense=props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString()===filteredYear;
 });

  

    return(
         <div>
         
          <div><ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHAndler} /></div>
           <ExpensesChart expenses={FilteredExpense} />
       <ExpensesList items={FilteredExpense}/>
      


    
      </div>

    )
}
export default Expenses;