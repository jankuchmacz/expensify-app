import React from "react";
import {connect} from 'react-redux'; //connect connects component to redux store
import ExpenseListItem from "./ExpenseLisItem";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                    
                ): (
                    props.expenses.map((expense) => {
                        return (
                            <ExpenseListItem key={expense.id} expense={expense} />
                        );            
                    })
                )
            }
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    //in this function we determine what information do we need from the store
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps) (ExpenseList);
//if you connect component to redux store it becomes reactive
//as the store changes component is rerendered with new values
