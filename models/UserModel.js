import knex from '../database/knex.js';

const UserModel = {
    getAll: () => knex('users').select('*'),
    getById: (id) => knex('users').where({ id }).first(),
    create: (user) => knex('users').insert(user).returning('*'),
    update: (id, user) => knex('users').where({ id }).update(user),
    delete: (id) => knex('users').where({ id }).del()
};

export default UserModel;
