import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from'../utils/utils.js';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const markup = { __html: getLatestNotification() };

class Notification extends Component {
    
    markAsRead(id) {
        console.log('Notification ${id} has been marked as read');
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }
    
    render () {
        
        const { listNotifications, displayDrawer } = this.props;
        
        return(
            <>
                <div className='menuItem'>
                    <p className={css(notificationStyles.p)}>Your notifications</p>
                </div>
            
                {displayDrawer && (
                    <div className={css(notificationStyles.notification)}>
                        <button style={{
                            position: 'absolute',
                            background: 'transparent',
                            border: 'none',
                            right: '20px',
                        }}
                        aria-label='close'
                        onClick={() => {
                        console.log('Close button has been clicked');
                        }}>
                            <img src={close_icon} className={css(notificationStyles.x_button)}alt="close" height="15px" width="15px"></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.length === 0 && (
                                <li>
                                    <p>No notification available yet</p>
                                </li>
                            )}

                            {listNotifications.map(notification => (
                                <NotificationItem id={notification.id} html={notification.html} markAsRead={this.markAsRead} type={notification.type} value={notification.value} />
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

const primaryColor = '#E11D3F';

const notificationStyles = StyleSheet.create({
    notifications: {
        '@media (min-width: 350px)': {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            background: 'white',
            fontSize: '20px',
    },
},

    x_button: {
        '@media (min-width: 350px)': {
            position: 'absolute',
            top: '15px',
            right: '10px',
        }
    },

    p: {
        position: 'absolute',
        right: '3rem',
        top: '0px',
    },
})

Notification.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

export default Notification;