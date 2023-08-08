import './Expenses.css';
import Card from "../Ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export function Expenses(props) {
    const [year, setYear] = useState('2019');
    useState(props.items.filter(item => item.date.getFullYear().toString() === year));
    const filterChangeHandler = (filterValue) => {
        setYear(filterValue);
    }

    const filteredExpenses = props.items.filter(e => e.date.getFullYear().toString() === year);


    return <Card className="expenses">
        <ExpenseFilter selected={year} onSelectedYearChanged={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>




    </Card>;
}