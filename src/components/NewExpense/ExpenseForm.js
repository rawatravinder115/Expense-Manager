import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");  // destructoring 
  const [enteredamount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
// arr =[1,2]
//const [i,j] = arr
  // const [userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // ***********************************************************

    // setUserInput({
    //     ...userInput,  // spread operator - flush out old value but save some value that you want.
    //     enteredTitle: event.target.value,

    // });

    // ***************************************************************

    // setUserInput((prevState) =>{
    //     return { ...prevState , enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // ********************************************************

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });

    // ***************************************************************

    // setUserInput((prevState) =>{
    //     return { ...prevState, enteredAmount: event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // ***********************************************

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })

    // *************************************************************

    // setUserInput((prevState) =>{
    //     return { ...prevState, enteredDate: event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // to avoid page refresh/reload.
    const expenseData = {
      title: enteredTitle,
      amount: enteredamount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
