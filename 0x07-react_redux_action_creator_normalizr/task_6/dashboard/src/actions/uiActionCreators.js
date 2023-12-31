import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

export const login = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN,
        user: {
            email: email,
            password: password
        }
    });
};

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT
    });
};

export const displayNotificationDrawer = () => (dispatch) => {
    dispatch({
        type: DISPLAY_NOTIFICATION_DRAWER
    });
};

export const hideNotificationDrawer = () => (dispatch) => {
    dispatch({
        type: HIDE_NOTIFICATION_DRAWER
    });
};