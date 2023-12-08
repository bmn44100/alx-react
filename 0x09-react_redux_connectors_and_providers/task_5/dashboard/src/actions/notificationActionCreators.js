import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';

export const markAsAread = (index) => (dispatch) => {
    dispatch({
        type: MARK_AS_READ,
        index
    });
};

export const setNotificationFilter = (filter) => (dispatch) => {
    dispatch({
        type: SET_TYPE_FILTER,
        filter
    });
};


export const setLoadingState = (loading) => {
    return {
        type: 'SET_LOADING_STATE',
        loading
    };
}

export const setNotifications = () => {
    return {
        type: 'FETCH_NOTIFICATIONS_SUCCESS',
        data
    };
};

export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        return fetch('./notifications.json')
            .then((res) => res.json())
            .then((data) => {
                dispatch(setNotifications(data));
            })
            .catch((err) => {})
            .finally(() => dispatch(setLoadingState(false)));
    };
};