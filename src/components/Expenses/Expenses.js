import ExpenseItem from "./ExpenseItem"

const Expenses=(props)=>{

    return(
         <div>
     {
         props.items.map((i)=>{ 
               return   <ExpenseItem key={i.id} id={i.id}  title={i.title} amount={i.amount} date={i.date}
       Location={i.LocationOfExpenditure}></ExpenseItem>
       }

      )
      }
      </div>

    )
}
export default Expenses;