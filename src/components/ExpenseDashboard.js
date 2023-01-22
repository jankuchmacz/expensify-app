import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashoboardPage = () => (
    <div>
        <ExpenseSummary/>
        <ExpenseListFilters />      
        <ExpenseList />
    </div>
);
export {ExpenseDashoboardPage as default}