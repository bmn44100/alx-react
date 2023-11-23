import React, { Component } from 'react';
import PropTypes from 'prop-types';

const WithLoggingHOC = (WrappedComponent) => {
    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class NewComponent extends Component {
        componentDidMount() {
            console.log('Component ${name} was mounted');
        }

        componentWillMount() {
            console.log('Component ${name} was unmounted');
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    NewComponent.displayName = 'WithLogging(${name})';
    return NewComponent;
}

export default WithLoggingHOC;