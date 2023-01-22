import React from "react";
import {connect} from 'react-redux'; //connect connects component to redux store
import getExpensesTotal from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";
import numeral from "numeral";
export const ExpenseSummary = (props) => {
    const numberOfExpenses = props.expenses;
    const expense = numberOfExpenses === 1 ? 'expense' : 'expenses'
    const summary = `Viewing ${numberOfExpenses} 
        ${expense} totalling
        ${numeral(props.expensesSum/100).format('$,0.00')}`;
    return (
        <div>
            <h1>{summary}</h1>      
        </div>
    );
}
const mapStateToProps = (state) => {
    //in this function we determine what information do we need from the store
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenses: expenses.length,
        expensesSum: getExpensesTotal(expenses)
    }
}
export default connect(mapStateToProps) (ExpenseSummary);
//if you connect component to redux store it becomes reactive
//as the store changes component is rerendered with new values