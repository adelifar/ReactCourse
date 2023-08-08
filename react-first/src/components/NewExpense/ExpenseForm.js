import styles from './ExpenseForm.module.css'
import React, {useState} from "react";
import Button from "./Button";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isFormVisible, setFormVisible] = useState(false);
    const [validTitle,setValidTitle]=useState(true);
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        setValidTitle(event.target.value.trim().length>0);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    function resetStates() {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setFormVisible(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!enteredDate || !enteredAmount || !enteredTitle) {
            setValidTitle(enteredTitle.trim().length>0);
            console.log('Incomplete data');
            console.log(validTitle);
            return;
        }
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        resetStates();
        props.onSaveExpenseData(expenseData);
    }

    const showFormHandler = (event) => setFormVisible(!isFormVisible)

    if (!isFormVisible) {
        return <div>
            <button onClick={showFormHandler}>Add Expense</button>
        </div>
    }
    return <form onSubmit={submitHandler}>
        <div className={styles["new-expense__controls"]} >
            <div className={`${styles['new-expense__control']} ${!validTitle && styles.invalid}`}>
                <label
                >Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}
                />
        </div>
            <div className={styles['new-expense__control']}>
                <label>Amount</label>
                <input type="number" min="1" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className={styles["new-expense__control"]  }>
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={showFormHandler}>Cancel</button>
            <button type="submit">Add</button>
        </div>
        <Button type="button" >Hello</Button>
    </form>

}
export default ExpenseForm;