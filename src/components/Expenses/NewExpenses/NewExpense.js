import React,{useState} from 'react';
import Input from './Input';

const NewExpense=(props)=>{
    
    const[Edit,setEdit]=useState(false);

    const onSaveDataHandler=(enteredExpenseData)=>{
const expenseData={
  ...enteredExpenseData,
  id:Math.random().toString(),
};
props.onAddExpense(expenseData);

}
const EditHandler =()=>{
    setEdit(true)
}
const  StopEdit=()=>{
    setEdit(false)
}
    return (
        <>
        {(!Edit &&<button onClick={EditHandler}>Add New Expense</button> )} 
      {Edit &&<Input onSaveData={onSaveDataHandler} onCancel={StopEdit} />}
        </>
    )
}
export  default NewExpense;