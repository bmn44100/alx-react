import notificationReducer from './notificationReducer';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    it('tests that the default state returns an empty array', () => {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual({ notifications: [], filter: 'DEFAULT' });
    });
    
    it('tests that the FETCH_NOTIFICATIONS_SUCCESS action modifies the state correctly', () => {
        const notifications = [
        {
            id: 1,
            type: 'default',
            value: 'New course available',
        },
        {
            id: 2,
            type: 'urgent',
            value: 'New resume available',
        },
        {
            id: 3,
            type: 'urgent',
            html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
        },
        ];
        const action = {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: notifications,
        };
        const state = notificationReducer(undefined, action);
        expect(state).toEqual(notifications.map((notification) => {
        return { ...notification, isRead: false };
        }));
    });
    
    it('tests that the MARK_AS_READ action modifies the state correctly', () => {
        const notifications = [
        {
            id: 1,
            type: 'default',
            value: 'New course available',
        },
        {
            id: 2,
            type: 'urgent',
            value: 'New resume available',
        },
        {
            id: 3,
            type: 'urgent',
            html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
        },
        ];
        const action = {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: notifications,
        };
        const state = notificationReducer(undefined, action);
        const action2 = {
        type: MARK_AS_READ,
        index: 2,
        };
        const state2 = notificationReducer(state, action2);
        expect(state2[1].isRead).toEqual(true);
        expect(state2[2].isRead).toEqual(false);
    });
    
    it('tests that the SET_TYPE_FILTER action modifies the state correctly', () => {
        const notifications = [
        {
            id: 1,
            type: 'default',
            value: 'New course available',
        },
        {
            id: 2,
            type: 'urgent',
            value: 'New resume available',
        },
        {
            id: 3,
            type: 'urgent',
        },
        ];
    });
});