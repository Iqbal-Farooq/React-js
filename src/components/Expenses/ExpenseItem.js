import './Expense.css'
import React ,{useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Wrapper from '../UI/Wrapper';
const ExpenseItem=(props)=>{
   let [amount,setAmount]= useState(props.amount)
    let [title,setTitle]= useState(props.title)
 const del=()=>{

   let child=document.getElementById(props.id);
   child.remove();
   console.log("DELETED SUCESSFULLY")

  
 }

let update=()=>{
  setAmount('$-100')
   setTitle('Updated!');

   
   console.log(amount)
   console.log(title)
   

  
 }


 
    return (
        <Wrapper id={props.id}>
           <h3 className='item' id='i'><mark>EXPENSE ITEMS</mark> </h3>
              <ExpenseDate  date={props.date} />
                <ExpenseDetails id={props.id} amount={amount} title={title} Location={props.Location}/>
                <div><button onClick={del}>Delete</button> <button onClick={update}>update</button></div>
                
               
             
 
        </Wrapper>


    )
    
    
}
export default ExpenseItem;