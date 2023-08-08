import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import Card from "../Ui/Card";
const NewExpense = (props) => {
    const saveExpenseDataHandler=enteredExpenseData=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.round(Math.random()*100).toString()
        };
        props.onAddExpense(expenseData);
    }
    return <Card className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Card>
}
export default NewExpense;