import { shallow } from 'enzyme';
import React from 'react';
import {LoadingPage} from '../../components/LoadingPage';
//react-test-renderer - allows us to render react components inside js code for testing purposes

test('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
});