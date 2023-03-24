import React from "react";
import {connect} from 'react-redux'; //connect connects component to redux store
import getExpensesTotal from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";
import numeral from "numeral";
import { Link } from "react-router-dom";
export const ExpenseSummary = (props) => {
    const numberOfExpenses = props.expenses;
    const expense = numberOfExpenses === 1 ? 'expense' : 'expenses'
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>
                    Viewing <span> {numberOfExpenses} </span> {expense} totalling <span>{numeral(props.expensesSum/100).format('$,0.00')}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>  
            </div>             
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