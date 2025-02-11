import knex from '../db/knex.js';

const TicketAssignmentModel = {
    getByTicketId: (ticket_id) => knex('ticket_assignments').where({ ticket_id }).select('*'),
    assignTicket: (assignment) => knex('ticket_assignments').insert(assignment).returning('*'),
    removeAssignment: (id) => knex('ticket_assignments').where({ id }).del()
};

export default TicketAssignmentModel;
