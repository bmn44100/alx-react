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

export const loginSuccess = () => (dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS
    });
};

export const loginFailure = () => (dispatch) => {
    dispatch({
        type: LOGIN_FAILURE
    });
};

export const loginRequest = (email, password) => (dispatch) => {
    return async (dispatch) => {
        dispatch(login(email, password));

        try {
            const response = await fetch('http://localhost:8080/login-success.json');
            const json = await response.json();
            if (json.error) {
                dispatch(loginFailure(json.error));
            } else {
                dispatch(loginSuccess(json.user));
            }
        } catch (error_1) {
            dispatch(loginFailure(error_1));
        }
    };
};