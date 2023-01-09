import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashoboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
export {ExpenseDashoboardPage as default}