import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    if ((type && value) && (typeof type === 'string' && typeof value ==='string') && (!html)) return(<li data-notification-type={type}>{value}</li>)
    if ((!type) && (html) && (html.__html)) return(<li data-notification-type="default" dangerouslySetInnerHTML={html}></li>)
    if ((type) && (html) && (html.__html)) return(<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
    return(<li data-notification-type="default">NotificationItem: invalid props</li>)
}

NotificationIten.PropTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string
}

export default NotificationItem;