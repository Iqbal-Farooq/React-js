function Input(){
    const print=(event)=>{
        event.preventDefault();
       

        let cat=document.getElementById('type').value;
        let amount=document.getElementById('amount').value;
        let date=document.getElementById('date').value;
        console.log(cat+" "+amount+" "+date);

    }
    return(
        <form>
        <input type='text' id="type" placeholder="expanse-name"/><br /><br />
         <input type='number' id="amount" placeholder="expense-amount"/><br /><br />
         <input type='date'  id="date" /> <br /><br />
         <button onClick={print}>Submit</button><br /><br />
         </form>
    )
}
export default Input;