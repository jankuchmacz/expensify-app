import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpense";
import expenses from "../fixtures/expenses";

let startAddExpense, history, wrapper;
beforeEach(()=>{
    //this function runs before every test
    startAddExpense= jest.fn(); //creating spies
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
})
test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})