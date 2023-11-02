import { shallow } from 'enzyme';
import Notification from "./Notifications";

const wrapper = shallow(<Notification />);

it('renders without crashing', () => {
    shallow(<Notification />);
});

it('renders three list items', () => {
    expect(wrapper.find('li').length).toBe(3);
});

it('renders the text Here is the list of notifications', () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
});

it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('.menuItem').exists()).toEqual(true);
});

it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('.Notifications').exists()).toEqual(false);
});

it('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toEqual(true);
});

it('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toEqual(true);
});