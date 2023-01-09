import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from "../../components/ExpenseDashboard";

test('Expense Dashboard renders correctly', () => {
    const wrapper = shallow(<ExpenseDashboard/>);
    expect(wrapper).toMatchSnapshot();
})