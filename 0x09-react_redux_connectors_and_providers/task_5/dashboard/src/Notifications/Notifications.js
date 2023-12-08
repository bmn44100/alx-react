import React, { PureComponent } from "react";
import { StyleSheet, css } from 'aphrodite';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from'../utils/utils.js';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const markup = { __html: getLatestNotification() };

export class Notification extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }

    render () {
        
        const { 
                listNotifications, 
                displayDrawer,
                handleDisplyDrawer,
                hideDisplayDrawer,
                markNotificationAsRead
        } = this.props;
        
        return(
            <React.Fragment>
                <div className={css(notificationStyles.pDiv)}>
                    <p 
                        className={css(animationStyle.animation)}
                        onClick={handleDisplayDrawer}
                    >
                    Your notifications</p>
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

                            {listNotifications &&
                              Object.values(listNotifications).map((notification) => (
                                <NotificationItem id={notification.id} html={notification.html} markAsRead={this.markAsRead} type={notification.type} value={notification.value} />
                            ))}
                        </ul>
                    </div>
                )}
            </React.Fragment>
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

    pDiv: {
        position: 'absolute',
        right: '3rem',
        top: '0px',
        backgroundColor: '#fff8f8',
    },
})

const opacityAnimation = {
    '0%': {
        opacity: 0,
    },
    '50%': {
        opacity: 0.75,
    },
    '100%': {
        opacity: 1,
    },
}

const translateYAnimation = {
    '0%': {
        transform: 'translateY(0px)',
    },
    '50%': {
        transform: 'translateY(-10px)',
    },

}

const animationStyle = StyleSheet.create({
    animation: {
        animationName: [opacityAnimation, translateYAnimation],
        animationDuration: '3s, 1200ms',
        animationIterationCount: '1, 3',
    },
})

Notification.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        listNotifications: state.notifications.get('messages'),
    };
};

const mapDispatchToProps = {
    fetchNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications); 