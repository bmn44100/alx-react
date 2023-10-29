import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
})

it('renders a div with the class App-header', () => {
  expect(wrapper.find('.App-header').length).toBe(1);
});

it('renders a div with the class App-body', () => {
  expect(wrapper.find('.App-body').length).toBe(1);
});

it('renders a div with the class App-footer', () => {
  expect(wrapper.find('.App-footer').length).toBe(1);
})
