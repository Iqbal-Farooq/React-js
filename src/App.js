

import ExpenseItem  from "./components/Expenses/ExpenseItem";
const  App=()=> {
  const expenses=[{id:'i1',title:"car-insurance",amount :'Rs-1200' ,date:new Date(2023,2,12),LocationOfExpenditure:"J&K"},
  {id:'j2',title:"Room-Rent",amount :'Rs-4000' ,date:new Date(2022,6,2),LocationOfExpenditure:"UP"},
  {id:'k3',title:"Trip",amount :'Rs-25000' ,date:new Date(2023,0,5),LocationOfExpenditure:"DEL"},
{id:'l4',title:"Sports",amount :'Rs-1500' ,date:new Date(2023,2,5),LocationOfExpenditure:"SRX"},]

  return (
     <div>
     {
          expenses.map((i)=>{ 
               return   <ExpenseItem id={i.id} title={i.title} amount={i.amount} date={i.date}
       Location={i.LocationOfExpenditure}></ExpenseItem>
       }

      )
      }
    

     </div>


)
     }

export default App;
