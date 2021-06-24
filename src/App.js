import React,{useState} from 'react';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  // const expense =[
  //   {title:'car Insurance',amount:320,Date: new Date(2021,2,28)},
  //   {title:'car Insurance',amount:320,Date: new Date(2021,2,28)},
  //   {title:'car Insurance',amount:320,Date: new Date(2021,2,28)},
  //   {title:'car Insurance',amount:320,Date: new Date(2021,2,28)},
  //   {title:'car Insurance',amount:320,Date: new Date(2021,2,28)},
  // ];
  

  // just because you change some variable React wont update the component 
// instead to achieve that you need to use state 

const [expenses,setExpenses]=useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);
    // **************************************************

    // setExpenses([expense, ...expenses]);

    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>lets get started !</h1>
      <NewExpense onAddExpense ={addExpenseHandler}></NewExpense>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

