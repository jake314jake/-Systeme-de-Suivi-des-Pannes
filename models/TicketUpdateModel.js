import knex from '../db/knex.js';

const TicketUpdateModel = {
    getByTicketId: (ticket_id) => knex('ticket_updates').where({ ticket_id }).select('*'),
    create: (update) => knex('ticket_updates').insert(update).returning('*')
};

export default TicketUpdateModel;
