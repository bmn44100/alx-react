import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
    
    render () {
        if ((this.props.type && this.props.value) && (typeof this.props.type === 'string' && typeof this.props.value ==='string') && (!this.props.html)) return(<li data-notification-type={this.props.type}>{this.props.value}</li>)
        if ((!this.props.type) && (this.props.html) && (this.props.html.__html)) return(<li data-notification-type="default" dangerouslySetInnerHTML={this.props.html}></li>)
        if ((this.props.type) && (this.props.html) && (this.props.html.__html)) return(<li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>)
        return(<li data-notification-type="default" onClick={this.props.markAsRead(id)}>NotificationItem: invalid props</li>)

    }
    
    }

NotificationItem.PropTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {},
    id: 0
}

export default NotificationItem;