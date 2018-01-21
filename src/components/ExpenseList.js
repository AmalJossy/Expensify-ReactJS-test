import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expense';
import ExpenseListItem from './ExpenseListItem';
const ExpenseList = (props) => (
    <div>
        <h1>List of expenses</h1>
        <ul>
            {props.expenses.map((expense) =>
                <li key={expense.id}><ExpenseListItem {...expense} /></li>
            )}
        </ul>
    </div>
);

const mapStatesToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses,state.filters)
});
const ConnectedExpenseList = connect(mapStatesToProps)(ExpenseList);

export default ConnectedExpenseList;
