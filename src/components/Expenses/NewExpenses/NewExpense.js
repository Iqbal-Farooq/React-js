import React from 'react';
import Input from './Input';

const NewExpense=(props)=>{

    const onSaveDataHandler=(enteredExpenseData)=>{
const expenseData={
  ...enteredExpenseData,
  id:Math.random().toString(),
};
props.onAddExpense(expenseData);

}
    return (
        <Input onSaveData={onSaveDataHandler}/>
    )
}
export  default NewExpense;