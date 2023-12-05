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
