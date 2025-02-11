import knex from '../db/knex.js';

const NotificationModel = {
    getByUserId: (user_id) => knex('notifications').where({ user_id }).select('*'),
    create: (notification) => knex('notifications').insert(notification).returning('*'),
    markAsRead: (id) => knex('notifications').where({ id }).update({ statut: 'Lu' })
};

export default NotificationModel;
