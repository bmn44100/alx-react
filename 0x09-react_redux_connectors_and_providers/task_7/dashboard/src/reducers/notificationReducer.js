import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import notificationsNormalizer from '../schema/notifications';

export const initialNotificationState = {
    notifications: [],
    filter: "DEFAULT",
    loading: false
}

const notificationReducer = (state = Map(initialState), action) => {
    console.log('action before switch', action);
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            console.log('normalizedData in FETCH switch', normalizedData);

            Object.keys(normalizedData.notifications).map((key) => {
                normalizedData.notifications[key].isRead = false;
            });
        case MARK_AS_READ:
            console.log('state in MARK_AS_READ switch', state);
            console.log('action in MARK_AS_READ switch', action);
            return state.setIn(['notifications', action.notificationId - 1, 'isRead'], true);
        case SET_TYPE_FILTER:
            console.log('state in SET_TYPE_FILTER switch', state);
            console.log('action in SET_TYPE_FILTER switch', action);
            return state.set('filter', action.filter);
        
        case 'SET_LOADING_STATE':
            return state.set('loading', action.loading);
        
        default:
            break;
        }
        return state;
};

export default notificationReducer;