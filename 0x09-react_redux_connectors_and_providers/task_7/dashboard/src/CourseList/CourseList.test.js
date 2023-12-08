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

it('renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(5);
    expect(wrapper.find('CourseListRow').get(0).props.textFirstCell).toEqual('Available courses');
});

it('renders correctly if you pass a list of courses', () => {
    const wrapper = shallow(<CourseList listCourses={[
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40},
    ]} />);
    expect(wrapper.find('CourseListRow').length).toBe(8);
    expect(wrapper.find('CourseListRow').get(6).props.textFirstCell).toEqual('ES6');
    expect(wrapper.find('CourseListRow').get(6).props.textSecondCell).toEqual(60);
    expect(wrapper.find('CourseListRow').get(7).props.textFirstCell).toEqual('Webpack');
    expect(wrapper.find('CourseListRow').get(7).props.textSecondCell).toEqual(20);
});

it('verifies that the action is dispatched when the component is mounted', () => {
    const fetchCourses = jest.fn(() => {});
    const wrapper = shallow(<CourseList fetchCourses={fetchCourses} />);
    expect(fetchCourses).toHaveBeenCalled();
});

it('verifies that the two actions are correctly dispatched when the onChangeRow function is called', () => {
    const selectCourse = jest.fn(() => {});
    const unSelectCourse = jest.fn(() => {});
    const wrapper = shallow(<CourseList selectCourse={selectCourse} unSelectCourse={unSelectCourse} />);
    wrapper.instance().onChangeRow(true, 1);
    expect(selectCourse).toHaveBeenCalledWith(1);
    wrapper.instance().onChangeRow(false, 1);
    expect(unSelectCourse).toHaveBeenCalledWith(1);
});