import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';
//react-test-renderer - allows us to render react components inside js code for testing purposes
test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe("Expensify");
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header/>);
     //snapshots allow us to track changes to data over time
     //expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
   
})