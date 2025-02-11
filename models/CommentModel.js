import knex from '../db/knex.js';

const CommentModel = {
    getByTicketId: (ticket_id) => knex('comments').where({ ticket_id }).select('*'),
    create: (comment) => knex('comments').insert(comment).returning('*'),
    delete: (id) => knex('comments').where({ id }).del()
};

export default CommentModel;
