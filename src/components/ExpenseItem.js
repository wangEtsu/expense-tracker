import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// first component, remember its just a JS function
function ExpenseItem(props) {

    return (
        <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div>
            <h2 className="expense-item__description">{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;
