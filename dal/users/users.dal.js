import { User } from "../../models/users/users.models.js";


export const userDal = {
    getUsers: () => User.findAll(),

    getUserById: (id) => User.findByPk(id),

    getUserByEmail: (email) => {
        return User.findOne({ where: { email } });
    },

    getUserByName: (name) => {
        return User.findOne({ where: { name } });
    },

    registerUser: (userData) => User.create(userData),

    updateUser: async (id, userData) => {
        await User.update(userData, { where: { id } });
        return User.findByPk(id);
    },

    deleteUser: (id) => {
        return User.destroy({ where: { id } });
    },
    
    usersCount: () => {
        return User.count();
    }
};