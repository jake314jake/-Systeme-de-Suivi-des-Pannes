import UserModel from '../models/UserModel.js';

const UserService = {
    getAllUsers: async () => {
        return await UserModel.getAll();
    },
    getUserById: async (id) => {
        return await UserModel.getById(id);
    },
    createUser: async (userData) => {
        return await UserModel.create(userData);
    },
    updateUser: async (id, userData) => {
        return await UserModel.update(id, userData);
    },
    deleteUser: async (id) => {
        return await UserModel.delete(id);
    }
};

export default UserService;
