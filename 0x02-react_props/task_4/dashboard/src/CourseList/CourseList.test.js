import { enzyme } from 'enzyme';
import CourseList from './CourseList';
import React from 'react';

const wrapper = shallow(<CourseList />);

it('renders without crashing', () => {
  shallow(<CourseList />);
  expect(wrapper.exists()).toBe(true);
});

it('renders 5 CourseListRow components', () => {
    expect(wrapper.find('CourseListRow').length).toBe(5);
});