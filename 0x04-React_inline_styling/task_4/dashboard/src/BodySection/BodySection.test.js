import { shallow, mount } from "enzyme";
import React, { Component } from "react";
import BodySection from './BodySection';

it('shallowing the component should render correctly the children and one h2 element', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p')).toHaveLength(1); 
    expect(wrapper.find('p').text()).toEqual('test children node');
});