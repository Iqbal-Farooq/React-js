import './Expense.css'
import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Wrapper from '../UI/Wrapper';
const ExpenseItem=(props)=>{
 
    return (
        <Wrapper>
           <h3 className='item' id='i'><mark>EXPENSE ITEMS</mark> </h3>
              <ExpenseDate  date={props.date} />
                <ExpenseDetails amount={props.amount} title={props.title} Location={props.Location}/>
               
             
 
        </Wrapper>


    )
    
    
}
export default ExpenseItem;