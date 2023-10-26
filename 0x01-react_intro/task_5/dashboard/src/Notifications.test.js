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