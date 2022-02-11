import './ExpenseDate.css';

const ExpenseDate = (props) => { 
    const day = props.date.toLocaleString('es-CO', { day: 'numeric' });
    const month = props.date.toLocaleString('es-CO', { month: 'long' });
    const year = props.date.toLocaleString('es-CO', { year: 'numeric' });

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;