import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer
} from './uiActionCreators';

describe('login', () => {
    it('tests calling login with user: email and password', () => {
        expect(login('email', 'password')).toEqual({
            type: 'LOGIN',
            user: {
                email: 'email',
                password: 'password'
            }
        });
    })
})

describe('logout', () => {
    it('tests calling logout', () => {
        expect(logout()).toEqual({
            type: 'LOGOUT'
        });
    })
})

describe('displayNotificationDrawer', () => {
    it('tests calling displayNotificationDrawer', () => {
        expect(displayNotificationDrawer()).toEqual({
            type: 'DISPLAY_NOTIFICATION_DRAWER'
        });
    })
})

describe('hideNotificationDrawer', () => {
    it('tests calling hideNotificationDrawer', () => {
        expect(hideNotificationDrawer()).toEqual({
            type: 'HIDE_NOTIFICATION_DRAWER'
        });
    })
})