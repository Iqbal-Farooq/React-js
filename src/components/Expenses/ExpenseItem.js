import './Expense.css'
import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Wrapper from '../UI/Wrapper';
const ExpenseItem=(props)=>{
 const del=()=>{

   let child=document.getElementById(props.id);
   child.remove();

  
 }


 
    return (
        <Wrapper id={props.id}>
           <h3 className='item' id='i'><mark>EXPENSE ITEMS</mark> </h3>
              <ExpenseDate  date={props.date} />
                <ExpenseDetails id={props.id} amount={props.amount} title={props.title} Location={props.Location}/>
                <div><button onClick={del}>Del</button></div>
               
             
 
        </Wrapper>


    )
    
    
}
export default ExpenseItem;