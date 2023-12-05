import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('markAsAread', () => {
    it('tests calling markAsAread with index: 1', () => {
        expect(markAsAread(1)).toEqual({
            type: 'MARK_AS_READ',
            index: 1
        });
    })
});

describe('setNotificationFilter', () => {
    it('tests calling setNotificationFilter with filter: DEFAULT', () => {
        expect(setNotificationFilter('DEFAULT')).toEqual({
            type: 'SET_TYPE_FILTER',
            filter: 'DEFAULT'
        });
    })
});