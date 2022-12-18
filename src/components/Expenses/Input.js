import React,{useState} from "react";
function Input(){
    const[enteredTitle,setEnteredTitle]=useState('')
    const[enteredAmount,setEnteredAmount]=useState('')
    const [entereDate,setEnteredDate]=useState('');

     const titleChanged=(e)=>{
        console.log(e.target.value);
        setEnteredTitle(e.target.value);
       
       }

            const amountChanged=(e)=>{
                console.log(e.target.value);
                setEnteredAmount(e.target.value)

            }

                        const dateChanged=(e)=>{
                        console.log(e.target.value);
                        setEnteredDate(e.target.value)

                    }
                                                
                                const print=(event)=>{
                                    event.preventDefault();
                                

                                    let cat=document.getElementById('type').value;
                                    let amount=document.getElementById('amount').value;
                                    let date=document.getElementById('date').value;
                                    console.log(cat+" "+amount+" "+date);
                                

                                }

                return(
                    <form>
                    <input type='text' id="type" placeholder="expanse-name" onChange={titleChanged}/><br /><br />
                    <input type='number' id="amount" placeholder="expense-amount" onChange={amountChanged}/><br /><br />
                    <input type='date'  id="date" onChange={dateChanged}/> <br /><br />
                    <button onClick={print}>Submit</button><br /><br />
                    </form>
                )
            }
            export default Input;