import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

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
       <ExpensesList items={FilteredExpense}/>


    
      </div>

    )
}
export default Expenses;