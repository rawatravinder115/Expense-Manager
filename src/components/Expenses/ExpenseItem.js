import React from 'react';
  
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

// function ExpenseItem(props) {
const ExpenseItem = (props) =>{  // arrow function
    // const expenseDate= new Date(2021,2,28);
    // const exprenseTitle= 'Car Insurance';
    // const expenseAmount = 320;



//   return (
//     <div className ="expense-item">
//       <div>{expenseDate.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{exprenseTitle}</h2>
//         <div className = "expense-item__price">${expenseAmount}</div>
//       </div>
//     </div>
//   );

// const month=props.date.toLocaleString('en-US',{month: 'long'});
// const day = props.date.toLocaleString('en-US',{day : '2-digit'});
// const Year= props.date.getFullYear();

// ************************************************************


// const [title,setTitle] = useState(props.title);
// console.log('ExpenseItem is evaluated by react');

// // state function always return array with two value

// const ClickHandler = () => {
//   setTitle('updated');
//   console.log(title);
// };


return (
    <Card className ="expense-item">
        {/* <div>
        <div>{month}</div>
        <div>{Year}</div>
        <div>{day}</div>
        </div> */}
        <ExpenseDate date={props.date} />

      {/* <div>{props.date.toISOString()}</div> */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className = "expense-item__price">${props.amount}</div>
      </div>
      {/* <div><button onClick={ClickHandler} >change Title</button></div> */}
      
    </Card>
  );
}

export default ExpenseItem;
