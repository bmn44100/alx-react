import React from "react";
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from'../utils/utils.js';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const markup = { __html: getLatestNotification() };

const Notification = ({ displayDrawer }) => {
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
                        <NotificationItem data-priority="urgent" value='New course available' />
                        <NotificationItem data-priority="urgent" value='New resume available' />
                        <NotificationItem type='urgent' html={{markup}} />
                    </ul>
                </div>
            )}
        </>
    );
}

NotificationItem.defaultProps = {
    displayDrawer: false
}

NotificationItem.propTypes = {
    displayDrawer: PropTypes.bool
}

export default Notification;