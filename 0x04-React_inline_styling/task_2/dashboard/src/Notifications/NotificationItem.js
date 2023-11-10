import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, value, html, markAsRead, id}) => {
    if (type === 'urgent') {
        return (
            <li onClick={() => { markAsRead(id) }}
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
                className={css(itemStyles.urgent)}
            >
                {value}
            </li>
        )
    }
    return (
        <li onClick={() => { markAsRead(id) }}
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
            className={css(itemStyles.default)}
        >
            {value}
        </li>
        )
}
    
const itemStyles = StyleSheet.create({
    default: {
        color: 'blue'
    },
    urgent: {
        color: 'red'
    }
})

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

export default memo(NotificationItem);