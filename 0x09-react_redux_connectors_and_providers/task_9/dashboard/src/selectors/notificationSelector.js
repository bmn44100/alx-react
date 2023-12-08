import { createSelector } from 'reselect';

export const getNotifications = (state) => {
    return state.get('notifications');
}


export const filterTypeSelected = (state) => {
    return state.get('filter');
}

export const getUnreadNotificationsByType = createSelector(
    getNotificationsSelector,
    (notifications) => {
        const messages = notifications.get('messages');
        const filter = notifications.get('filter');

        if (messages) {
            let filteredMessages;

            if (filter === 'URGENT') {
                filteredMessages = messages.valueSeq().filter(
                    (value) => 
                        value.get('isRead') === false && value.get('type') === 'urgent');
            } else {
            filteredMessages = messages.valueSeq().filter((value) => value.get('isRead') === false);
            }

            return filteredMessages;
        }

        return messages;
    }

);