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


