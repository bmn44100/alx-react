import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import NotificationItem from '../Notifications/NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

window.alert = jest.fn();

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
  expect(wrapper.exists().toBe(true));
})

it('contains the Notifications component', () => {
  expect(wrapper.contains(<Notifications />)).toBe(true);
});

it('contains the Header component', () => {
  expect(wrapper.contains(<Header />)).toBe(true);
});

it('contains the Login component', () => {
  expect(wrapper.contains(<Login />)).toBe(true);
});

it('contains the Footer component', () => {
  expect(wrapper.contains(<Footer />)).toBe(true);
});

it('CourseList is not displayed when isLoggedIn is false', () => {
  expect(wrapper.contains(<CourseList />)).toBe(false);
});

it('when isLoggedIn is true, the Login component is not displayed', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.contains(<Login />)).toBe(false);
});

it('when isLoggedIn is true, the CourseList component is displayed', () => {  
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.contains(<CourseList />)).toBe(true);
});

it('when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
  const myLogOut = jest.fn(() => undefined);
  const myAlert = jest.fn(() => undefined);
  const wrapper = shallow(<App logOut={myLogOut} />);
  const event = {key: 'h', ctrlKey: true};
  wrapper.find('body').simulate('keydown', event);
  expect(myLogOut).toHaveBeenCalled();
  expect(myAlert).toHaveBeenCalledWith('Logging you out');
});

it('the default state for displayDrawer is false, verify that after calling handleDisplayDrawer, the state is now true', () => {
  expect(wrapper.state().displayDrawer).toEqual(false);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state().displayDrawer).toEqual(true);
});

it('verify that after calling handleHideDrawer, the state is now false', () => {
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state().displayDrawer).toEqual(false);
});
