import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExepensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) =>{
      return expense.date.getFullYear().toString() === filteredYear;
  });

  // another approach for this 

  // let expensesContent = <p> No Expenses Found.</p>

  // if(filteredExpenses.length > 0){
  //   expensesContent= filteredExpenses.map((expense) => {
  //     <ExpenseItem
  //     key ={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
      
  //     />
  //   });
  // }


  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>

       {/* two display the enpense array dynamically  */}

       {/* ** you should always add such a key when mapping out lists of items  */}

      {/* {filteredExpenses.length === 0 ?  (
      <p> No Expenses Fonud </p> ) :
        ( filteredExpenses.map((expense) => (
        <ExpenseItem
         key ={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))
       )} */}

      {/* {expensesContent} */}

       <ExepensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </div>
  );
}

export default Expenses;
