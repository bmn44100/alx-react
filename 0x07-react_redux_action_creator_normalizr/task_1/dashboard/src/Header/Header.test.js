import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

const wrapper = shallow(<Header />);

it('renders without crashing', () => {
    shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
})

it('contains img and h1 tags', () => {
    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
})


it('mounts the Header component with a default context value and logoutSection is not created', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.exists('#logoutSection')).toBe(false);
})

it('mounts the Header component with a user defined isLoggedIn is true and the logoutSection is created', () => {
    const wrapper = mount(<Header />);
    const user = {
        email: 'email',
        password: 'password',
    }
    const logOut = () => {
        user.isLoggedIn = true;
    }
    const context = { user, logOut };
    wrapper.context(context);
    expect(wrapper.exists('#logoutSection')).toBe(true);
})

it('mounts the Header component with a user defined isLoggedIn is false and the logoutSection is not created', () => {
    const wrapper = mount(<Header />);
    const user = {
        email: '',
        password: '',
    }
    const logOut = () => {
        user.isLoggedIn = false;
    }
    const context = { user, logOut };
    wrapper.context(context);
    expect(wrapper.exists('#logoutSection')).toBe(false);
})