import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditting, setIsEditting] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);

        // close the form
        stopEdittingHandler();
    };

    const startEdittingHandler = () => {
        setIsEditting(true);
    }

    const stopEdittingHandler = () => {
        setIsEditting(false);
    }

    return <div className="new-expense">
        {!isEditting && <button onClick={startEdittingHandler}>Add New Expense</button>}
        {isEditting && <ExpenseForm  onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEdittingHandler} />}
    </div>
};

export default NewExpense