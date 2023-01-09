import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpense";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, expense, history, wrapper;
beforeEach(()=>{
    //this function runs before every test
    editExpense = jest.fn(); //creating spies
    removeExpense = jest.fn();
    expense = expenses[1];
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense}
            expense={expense}
            history={history}
        />);
});
test('should render EditExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
})
test('should handle editExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})
test('should handle removeExpense', ()=>{
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
    expect(history.push).toHaveBeenLastCalledWith('/');
})