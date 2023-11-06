import React, { Component } from "react";
import './Notifications.css';
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
    
    render () {
        
        const { listNotifications, displayDrawer } = this.props;
        
        return(
            <>
                <div className='menuItem'>
                    <p>Your notifications</p>
                </div>
            
                {displayDrawer && (
                    <div className='Notifications'>
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
                            <img src={close_icon} alt="close" height="15px" width="15px"></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.length === 0 && (
                                <li>
                                    <p>No notification available yet</p>
                                </li>
                            )}

                            {listNotifications.map(notification => (
                                <NotificationItem id={notification.id} html={notification.html} type={notification.type} value={notification.value} />
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notification.defaultProps = {
    displayDrawer: false
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool
}

export default Notification;