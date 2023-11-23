const jsonData = require('../notifications.json');
const schema = require('normalizr').schema;
const normalize = require('normalizr').normalize;

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

export const normalizedData = normalize(jsonData, [notification]);

export const getAllNotificationsByUser = (userId) => {
    const notificationsList = [];
    jsonData.forEach((notification) => {
        if (notification.author.id === userId) {
            notificationsList.push(notification.context);
        }
    })
    return notificationsList;
}

