import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
const ExpenseDashBoard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default ExpenseDashBoard;