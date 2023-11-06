import { shallow } from 'enzyme';
import react, { Component } from 'react';
import WithLoggingHOC from './WithLogging';

describe('WithLoggingHOC', () => {
    it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
        console.log = jest.fn();
        const WrappedElement = WithLoggingHOC(() => <p />);
        const wrapper = shallow(<WrappedElement />);
        expect(console.log).toHaveBeenCalledWith('Component Component was mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Component was unmounted');
    });

    it('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. Component Login is mounted and Component Login is going to unmount should be sent to the console', () => {
        console.log = jest.fn();
        const WrappedElement = WithLoggingHOC(() => <p />);
        const wrapper = shallow(<WrappedElement />);
        expect(console.log).toHaveBeenCalledWith('Component Component was mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Component was unmounted');
    });
});