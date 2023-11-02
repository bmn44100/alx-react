import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
    shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
})

it('renders 2 input tags and 2 label tags', () => {
    expect(wrapper.find('input').length()).toBe(2);
    expect(wrapper.find('label').length()).toBe(2);
})