import React from "react";
import {shallow} from 'enzyme';
import ExpenseListItem from "../../components/ExpenseLisItem";
import expenses from "../fixtures/expenses";

test('should render ExpenseListItem with expense data', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})