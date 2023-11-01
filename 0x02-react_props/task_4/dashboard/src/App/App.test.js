import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';

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
})

it('contains the Footer component', () => {
  expect(wrapper.contains(<Footer />)).toBe(true);
})