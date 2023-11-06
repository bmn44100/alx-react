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

it('renders correctly if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('ul').children().length).toEqual(1);
    expect(wrapper.find('ul').children().text()).toEqual('No new notification for now');
});

it('renders correctly if you pass an empty array or if the array contains multiple messages', () => {
    const wrapper = shallow(<Notification listNotifications={[]} />);
    expect(wrapper.find('ul').children().length).toEqual(1);
    expect(wrapper.find('ul').children().text()).toEqual('No new notification for now');
});

it('when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notification listNotifications={[
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: { __html: getLatestNotification() }},
    ]} />);
    expect(wrapper.find('ul').children().length).toEqual(3);
    expect(wrapper.find('NotificationItem').length).toEqual(3);
});