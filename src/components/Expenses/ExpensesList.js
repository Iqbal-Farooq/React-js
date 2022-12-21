import ExpenseItem from "./ExpenseItem";
const ExpensesList=(props)=>{
   
   if(props.items.length===0){
    return <p style={{color:"tomato"}}>NO EXPENSE FOUND</p>;
}
if(props.items.length===1){
     return( <>
     <p style={{color:"blue"}}>Only single Expense Here PLease Add More</p>
     {props.items.map(i=>{return  <ExpenseItem key={i.id} id={i.id}  title={i.title} amount={i.amount} date={i.date}
       Location={i.LocationOfExpenditure}></ExpenseItem>} )}
       </> ) 
}
     return(
        <ul>
        {props.items.map(i=>{  
     return <ExpenseItem key={i.id} id={i.id}  title={i.title} amount={i.amount} date={i.date}
       Location={i.LocationOfExpenditure}></ExpenseItem>} ) }  </ul>)


}
export default ExpensesList;