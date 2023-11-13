import { enzyme } from 'enzyme';
import CourseListRow from './CourseListRow';
import React from 'react';

const wrapper = shallow(<CourseListRow />);

it('renders without crashing', () => {
  shallow(<CourseListRow />);
});

it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('th').exists()).toBe(true);
});

it('renders two cells when textSecondCell exists', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test" />);
    expect(wrapper.find('th').length).toBe(2);
});

it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    expect(wrapper.find('tr').children('td').length).toBe(2);
    expect(wrapper.find('tr').length).toBe(1);
});