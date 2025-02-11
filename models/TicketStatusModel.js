import knex from '../db/knex.js';

const TicketStatusModel = {
    getAll: () => knex('ticket_statuses').select('*'),
    getById: (id) => knex('ticket_statuses').where({ id }).first(),
    create: (status) => knex('ticket_statuses').insert(status).returning('*'),
    update: (id, status) => knex('ticket_statuses').where({ id }).update(status),
    delete: (id) => knex('ticket_statuses').where({ id }).del()
};

export default TicketStatusModel;
