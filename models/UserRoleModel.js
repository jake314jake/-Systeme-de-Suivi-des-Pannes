import knex from '../db/knex.js';

const UserRoleModel = {
    assignRole: (user_id, role_id) => knex('user_roles').insert({ user_id, role_id }),
    getUserRoles: (user_id) => knex('user_roles').where({ user_id }).select('*'),
    removeRole: (user_id, role_id) => knex('user_roles').where({ user_id, role_id }).del()
};

export default UserRoleModel;
