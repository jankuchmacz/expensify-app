import { shallow } from 'enzyme';
import React from 'react';
import {LoginPage} from '../../components/LoginPage';

let startLogin, wrapper;
beforeEach(()=>{
    //this function runs before every test
    startLogin= jest.fn(); //creating spies
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
});

test('should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should call startLogin on button click', ()=>{
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});