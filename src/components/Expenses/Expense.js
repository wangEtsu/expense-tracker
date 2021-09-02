import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

function Expense(props) {

    const [filteredYear, setFilteredYears] = useState('2020')

    // this is triggered by child component: ExpenseFilter.js
    const filterChangeHandler = (selectedYear) => {
        console.log("Selected year is " + selectedYear);
        setFilteredYears(selectedYear);
    }

    return (
        <div>
            <Card>
                
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                ></ExpenseItem>
            </Card>
        </div>
    )
}

export default Expense;