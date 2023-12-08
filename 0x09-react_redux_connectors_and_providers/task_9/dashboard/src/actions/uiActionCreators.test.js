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

describe('loginSuccess', () => {
    it('tests that loginRequest dispatch is called with the right type when API responds with json data', () => {
        const dispatch = jest.fn();
        const email = 'email';
        const password = 'password';

        loginRequest(email, password)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGIN',
        });

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGIN_SUCCESS',
            user: {
                email: 'email',
                password: 'password'
            }
        });
    });

    it('tests that loginRequest dispatch is called with the right type when API responds with error message', () => {
        const dispatch = jest.fn();
        const email = 'email';
        const password = 'password';

        loginRequest(email, password)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGIN',
        });

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGIN_FAILURE',
            error: 'login failed'
        });
    });

    it('tests that loginRequest dispatch is called with the right type when API responds with error message', () => {
        const dispatch = jest.fn();
        const email = 'email';
        const password = 'password';

        const response = loginRequest(email, password)(dispatch);

        expect(response).toEqual(fetchMock.mock('http://localhost:8080/login-success.json'));

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGIN',
        });

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOGIN_FAILURE',
        });
    });
});