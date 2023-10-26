import React from 'react';
import { act } from 'react-dom/test-utils';
import { getFullYear, getFooterCopy, getLatestNotifications } from './Notifications'

test('getFullYear returns the correct year', () => {
    expect(getFullYear()).toBe(2022);
});

test('getFooterCopy returns the correct string', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
});

test('the returned string for getLatestNotification', () => {
    expect(getLatestNotifications().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})