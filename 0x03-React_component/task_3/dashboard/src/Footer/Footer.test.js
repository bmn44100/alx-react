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
