import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
    const [filterValue, setFilterValue] = useState('2020');

    const filterChangeHandler = (selectedFilterValue) => {
        setFilterValue(selectedFilterValue);
    };

    const filteredExpenses = expenses.filter((expense) => {  
        return expense.date.getFullYear().toString() === filterValue;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterValue} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;