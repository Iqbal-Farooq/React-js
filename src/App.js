import React,{useState} from 'react';
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

import Expenses from './components/Expenses/Expenses';



 const DUMMY_EXPENSES=[{id:'i1',title:"car-insurance",amount :'Rs-1200' ,date:new Date(2023,2,12),LocationOfExpenditure:"J&K"},
  {id:'j2',title:"Room-Rent",amount :'Rs-4000' ,date:new Date(2022,6,2),LocationOfExpenditure:"UP"},
  {id:'k3',title:"Trip",amount :'Rs-25000' ,date:new Date(2021,0,5),LocationOfExpenditure:"DEL"},
{id:'l4',title:"Sports",amount :'Rs-1500' ,date:new Date(2023,2,5),LocationOfExpenditure:"SRX"},]
const  App=()=> {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  
 

const addExpenseHander=(newdata)=>{
  console.log(newdata)
  setExpenses((previousExp)=>{
    return [newdata,...previousExp];

  })

  
 
}



  return (
     <>
     <NewExpense onAddExpense={addExpenseHander} />
   
       <Expenses items={expenses}/>
   </>


)
     }
 
export default App;
