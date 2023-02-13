import { shallow } from 'enzyme';
import React from 'react';
import {Header} from '../../components/Header';
//react-test-renderer - allows us to render react components inside js code for testing purposes

let startLogout, wrapper;
beforeEach(()=>{
    //this function runs before every test
    startLogout= jest.fn(); //creating spies
    wrapper = shallow(<Header startLogout={startLogout}/>);
});
test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe("Expensify");
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header/>);
     //snapshots allow us to track changes to data over time
     //expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
   
})
test('should call startLogout on button click', ()=>{
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});