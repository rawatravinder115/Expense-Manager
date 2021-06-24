import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm  onSaveExpenseData ={SaveExpenseDataHandler}></ExpenseForm>
    </div>
}

export default NewExpense;
// props oobject with key value pair .
// props = {"onSaveExpenseData":saveExpenseDataHandler f()}
