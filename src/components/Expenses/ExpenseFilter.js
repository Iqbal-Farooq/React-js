import React from 'react';
const ExpenseFilter=(props)=>{
    const dropDownChangeHandler=(event)=>{
         props.onChangeFilter(event.target.value)
    };

    return(
        <>
            <label> Filter by Year</label>
            <select value={props.selected} onChange={dropDownChangeHandler} >
                <option value="2022">2022</option>
                 <option value="2021">2021</option>
                  <option value="2023">2023</option>
                   <option value="2024">2024</option>
            </select>
        </>
    )
   
}
export default ExpenseFilter;