import { shallow } from "enzyme";
import React from 'react';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('renders without crashing', () => {
    shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
})

it('contains the text “Copyright”', () => {
    expect(wrapper.text()).toContain('Copyright');
})

it('the link is not displayed when the user is logged out within the context', () => {
    const context = {
        user: {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }
    const wrapper = shallow(<Footer />, { context });
    expect(wrapper.find('a')).toHaveLength(0);
})

it('the link is displayed when the user is logged in within the context', () => {
    const context = {
        user: {
            email: '',
            password: '',
            isLoggedIn: true
        }
    }
    const wrapper = shallow(<Footer />, { context });
    expect(wrapper.find('a')).toHaveLength(1);
})
