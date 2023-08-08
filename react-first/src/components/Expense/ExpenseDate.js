import './ExpenseDate.css';
export function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-Us',{month:'long'});
    const year=props.date.toLocaleString('en-Us',{year:'numeric'});
    const day=props.date.toLocaleString('en-Us',{day:'2-digit'});
    return <div className="expense-date">
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-year">{year}</div>
        <div className="expense-date-day">{day}</div>
    </div>;
}