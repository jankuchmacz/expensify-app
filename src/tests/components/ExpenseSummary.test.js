import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import getExpensesTotal from '../../selectors/expenses-total';

test('should render correct summary for 1 expense', ()=> {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} expensesSum={getExpensesTotal([expenses[0]])} />)
    expect(wrapper).toMatchSnapshot();
})
test('should render correct summary for many expenses', ()=> {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} expensesSum={getExpensesTotal(expenses)} />)
    expect(wrapper).toMatchSnapshot();
})
