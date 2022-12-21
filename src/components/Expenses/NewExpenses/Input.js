import React,{useState} from "react";
function Input(props){
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
                    //   one approach printing data on console
                                // const print=(event)=>{
                                //     event.preventDefault();


                                //     let cat=document.getElementById('type').value;
                                //     let amount=document.getElementById('amount').value;
                                //     let date=document.getElementById('date').value;
                                //     console.log(cat+" "+amount+" "+date);

                                // }
                                // Other Approach printing data on console

                                const Show=(event)=>{
                                    event.preventDefault();

                                    let obj={
                                       title:enteredTitle,
                                       amount:enteredAmount,
                                       date:new Date(entereDate),

                                    }
                                    // console.log(obj);
                                    props.onSaveData(obj);
                                    setEnteredTitle('');
                                    setEnteredAmount('');
                                    setEnteredDate('');
                                }

                return(
                    <>
                    <form onSubmit={Show}>
                    <input type='text' id="type" value={enteredTitle} placeholder="expanse-name" onChange={titleChanged}/><br /><br />
                    <input type='number' id="amount" value={enteredAmount} placeholder="expense-amount" onChange={amountChanged}/><br /><br />
                    <input type='date'  id="date" value={entereDate} onChange={dateChanged}/> <br /><br />
                    {/* <button onClick={print} >Submit</button><br /><br /> */}
                    <button onClick={props.onCancel}>Cancel</button>  <button >Submit</button><br /><br />
                    </form>

                               
                    </>
                )
            }
            export default Input;