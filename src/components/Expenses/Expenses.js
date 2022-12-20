import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from './ExpenseFilter';

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


     {
        FilteredExpense.map((i)=>{ 
               return   <ExpenseItem key={i.id} id={i.id}  title={i.title} amount={i.amount} date={i.date}
       Location={i.LocationOfExpenditure}></ExpenseItem>})

      }

      </div>

    )
}
export default Expenses;