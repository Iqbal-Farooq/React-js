import './Expense.css'

function ExpenseDetails(props){

    return(
       <div>
         <h3 className='item'> {props.title}</h3>
            <h3 className='item'>{props.amount}</h3>
            <h3 className='item'>{props.Location}</h3> 
            </div>
    )
}
export default ExpenseDetails;