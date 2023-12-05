import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes';

decribe('uiReducer', () => {
    it('tests that the state returned by the uiReducer function equals the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    })

    it('tests that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: SELECT_COURSE, index: 1 });
        expect(state).toEqual(initialState);
    })

    it('tests that the state returned by the uiReducer function equals the initial state when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state).toEqual(initialState);
    })
})