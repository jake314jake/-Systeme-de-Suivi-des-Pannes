import knex from '../db/knex.js';

const TicketModel = {
    getAll: () => knex('tickets').select('*'),
    getById: (id) => knex('tickets').where({ id }).first(),
    create: (ticket) => knex('tickets').insert(ticket).returning('*'),
    update: (id, ticket) => knex('tickets').where({ id }).update(ticket),
    delete: (id) => knex('tickets').where({ id }).del()
};

export default TicketModel;
