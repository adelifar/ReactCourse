import React, {useState} from 'react';
import './App.css';
import {Expenses} from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const initialExpenses = [
    {title: 'شاٰٰرژ ساختمان', amount: 20, date: new Date(2022, 2, 3), id: 1},
    {title: 'میوه', amount: 60, date: new Date(2022, 2, 10), id: 2},
    {title: 'خرید کادو', amount: 250, date: new Date(2022, 2, 14), id: 3},
];
function App() {


    const [expenses,setExpenses]=useState(initialExpenses);
    const addExpenseHandler=expense=>{

        setExpenses(prevExpenses=>{
            return [expense,...prevExpenses];
        });
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
