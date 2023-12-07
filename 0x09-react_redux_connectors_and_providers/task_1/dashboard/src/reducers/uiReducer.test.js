import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes';
import { Map } from 'immutable';
import uiReducer, { initialState } from './uiReducer';

decribe('uiReducer', () => {
    it('tests that the state returned by the uiReducer function equals the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(uiReducer(undefined, {})).toEqual(Map(initialState));
    })

    it('tests that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
        expect(uiReducer(undefined, { type: SELECT_COURSE, index: 1 })).toEqual(Map(initialState));
    })

    it('tests that the state returned by the uiReducer function equals the initial state when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state.get('isNotificationDrawerVisible')).toEqual(true);
    })
})