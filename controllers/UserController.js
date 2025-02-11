import UserService from '../services/UserService.js';

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error });
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(id);
            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error });
        }
    },

    createUser: async (req, res) => {
        try {
            const userData = req.body;
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const userData = req.body;
            await UserService.updateUser(id, userData);
            res.status(200).json({ message: "Utilisateur mis à jour" });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            await UserService.deleteUser(id);
            res.status(200).json({ message: "Utilisateur supprimé" });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error });
        }
    }
};

export default UserController;
