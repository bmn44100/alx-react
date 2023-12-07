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
import AppContext, { user, logOut } from './AppContext';
import { fromJs } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uiReducer, { initialState } from '../reducers/uiReducer';

const store = createStore(uiReducer, fromJs(initialState));

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

it('if logOut is being called by verifying if the state is updated correctly instead', () => {
  wrapper.instance().logOut();
  expect(wrapper.state().user.isLoggedIn).toEqual(false);
})

it('the logIn function updates the state correctly', () => {
  wrapper.instance().logIn('email', 'password');
  expect(wrapper.state().user.email).toEqual('email');
  expect(wrapper.state().user.password).toEqual('password');
  expect(wrapper.state().user.isLoggedIn).toEqual(true);
})

it('the logOut function updates the state correctly', () => {
  wrapper.instance().logOut();
  expect(wrapper.state().user.email).toEqual('');
  expect(wrapper.state().user.password).toEqual('');
  expect(wrapper.state().user.isLoggedIn).toEqual(false);
})

it('markNotificationAsRead works as intended, set the state with a mock list of notifications, then call the function and verify that the state of the container has been updated correctly', () => {
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
  ];
  wrapper.instance().setState({listNotifications});
  wrapper.instance().markNotificationAsRead(2);
  expect(wrapper.state().listNotifications).toEqual([
    {id: 1, type: 'default', value: 'New course available'},
    {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
  ]);
})

it('verifies that the mapStateToProps functionreturns the right object', () => {
  const state = {
    isNotificationDrawerVisible: true
  };
  const result = mapStateToProps(state);
  expect(result).toEqual({displayDrawer: true});
});