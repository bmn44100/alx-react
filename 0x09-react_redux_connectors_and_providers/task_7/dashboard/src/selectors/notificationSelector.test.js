import notificationReducer from "../reducers/notificationReducer";
import {
    FETCH_NOTIFICATIONS_SUCCESS
} from "../actions/notificationActionTypes";
import {
    getNotifications,
    getUnreadNotifications,
    filterTypeSelected
} from "./notificationSelector";
import { Map } from "immutable";
import notificationsNormalizer from "../schema/notifications";

describe("notificationSelector", () => {
    it("tests that getNotifications returns the right data", () => {
        const notifications = [
            {
                id: 1,
                type: "default",
                value: "New course available",
            },
            {
                id: 2,
                type: "urgent",
                value: "New resume available",
            },
            {
                id: 3,
                type: "urgent",
                html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
            },
        ];
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: notifications,
        };
        const state = notificationReducer(undefined, action);
        const result = getNotifications(state);
        expect(result).toEqual(notifications.map((notification) => {
            return { ...notification, isRead: false };
        }));
    });

    it("tests that getUnreadNotifications returns the right data", () => {
        const notifications = [
            {
                id: 1,
                type: "default",
                value: "New course available",
            },
            {
                id: 2,
                type: "urgent",
                value: "New resume available",
            },
            {
                id: 3,
                type: "urgent",
                html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
            },
        ];
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: notifications,
        };
        const state = notificationReducer(undefined, action);
        const result = getUnreadNotifications(state);
        expect(result).toEqual(notifications.map((notification) => {
            return { ...notification, isRead: false };
        }));
    });

    it("tests that filterTypeSelected returns the right data", () => {
        const notifications = [
            {
                id: 1,
                type: "default",
                value: "New course available",
            },
            {
                id: 2,
                type: "urgent",
                value: "New resume available",
            },
            {
                id: 3,
                type: "urgent",
                html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
            },
        ];
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: notifications,
        };
        const state = notificationReducer(undefined, action);
        const result = filterTypeSelected(state);
        expect(result).toEqual(notifications.map((notification) => {
            return { ...notification, isRead: false };
        }));
    });
});