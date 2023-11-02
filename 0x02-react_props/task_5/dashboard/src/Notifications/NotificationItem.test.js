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