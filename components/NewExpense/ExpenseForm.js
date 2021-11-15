import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const[enteredTitle, setEntereredTitle] = useState('');
    const[enteredAmount, setEntereredAmount] = useState('');
    const[enteredDate, setEntereredDate] = useState('');    

    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    eneteredAmount: '',
    //    enteredDate: '',
    //});
    const titleChangeHandler = (event) => {
        setEntereredTitle(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value
        //});
        //setUserInput((prevState) => {
        //    return {...prevState, enteredTitle: event.target.value};
        //});

    };
    const amountChangeHandler = (event) => {
        setEntereredAmount(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value
        //});
    };
    const dateChangeHandler = (event) => {
        setEntereredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value
        //});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEntereredTitle('');
        setEntereredAmount('');
        setEntereredDate('');
    };

    return (<form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expesne</button>
        </div>
    </form>

    );
}

export default ExpenseForm;