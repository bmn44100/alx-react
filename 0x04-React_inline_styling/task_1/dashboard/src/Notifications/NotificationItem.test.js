import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';


it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
    }
)

it('renders the correct html dummy type props', () => {
    const wrapper = shallow(<NotificationItem type='urgent' />);
    expect(wrapper.html()).toContain('urgent');
    }
)

it('renders the correct html dummy value props', () => {
    const wrapper = shallow(<NotificationItem value='test' />);
    expect(wrapper.find('li')).text().toBe('test');
    }
)

it('renders the correct html dummy props', () => {
    const wrapper = shallow(<NotificationItem html={{__html: 'dangerouslySetInnerHtml'}} />);
    expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
    }
)

it('passes a spy as the markAsRead property', () => {
    const wrapper = shallow(<NotificationItem />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'markAsRead');
    instance.forceUpdate();
    expect(spy).notToHaveBeenCalled();
});

it('calls markAsRead with the right id when clicked', () => {
    const wrapper = shallow(<NotificationItem id={1} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'markAsRead');
    instance.forceUpdate();
    wrapper.find('li').simulate('click');
    expect(spy).toHaveBeenCalledWith(1);
});