
import './Expense.css'
function ExpenseDate(props){
const month=props.date.toLocaleString('en-US',{month:"long"});
 const year=props.date.getFullYear();
 const day=props.date.toLocaleString('en-US',{day:"2-digit"});
 

 return (
 <h3  className='item' >{day+" " }{month+" " }{ year} </h3>)
 
}
export default ExpenseDate;