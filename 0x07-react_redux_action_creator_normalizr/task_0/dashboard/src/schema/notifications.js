const jsonData = require('../notifications.json');

const getAllNotificationsByUser = (userId) => {
    const notificationsList = [];
    jsonData.forEach((notification) => {
        if (notification.author.id === userId) {
            notificationsList.push(notification.context);
        }
    })
    return notificationsList;
}

export default getAllNotificationsByUser;