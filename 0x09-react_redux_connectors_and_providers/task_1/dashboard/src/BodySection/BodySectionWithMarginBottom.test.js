import { shallow } from 'enzyme';
import React from 'react';

it('renders correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
});