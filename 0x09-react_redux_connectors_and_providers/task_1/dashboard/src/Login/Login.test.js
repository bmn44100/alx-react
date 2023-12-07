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

it('the submit button is disabled by default', () => {
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
})

it('verify that after changing the value of the two inputs, the button is enabled', () => {
    wrapper.find('input[type="email"]').simulate('change', {target: {value: 'email'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {value: 'password'}});
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
    wrapper.unmount();
})